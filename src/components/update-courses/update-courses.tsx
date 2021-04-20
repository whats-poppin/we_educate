import React, { useContext, useEffect } from 'react';
import { cipher } from "../../utils/encrypt-decrypt";
import {
    Button,
    CircularProgress,
    createStyles,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Theme
} from "@material-ui/core";
import { AllCoursesContext } from "../../contexts/all-courses";
import { fetchAllCourses, updateCourse } from "../../controllers/courses-controller";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";
import { Loader } from "../loader/loader";
import { DateTimePicker } from "@material-ui/pickers";
import { useLoginSignupStyles } from "../../utils/component-styles/login-signup";
import firebase from "firebase";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        parentDiv: {
            minWidth: 300,
            maxWidth: 700,
            display: 'grid',
            placeItems: 'center',
            justifyContent: 'left',
            justifyItems: 'left'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 250,
            maxWidth: 450,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export const UpdateCourses = () => {
    const classes = useStyles();
    const buttonClasses = useLoginSignupStyles();
    const [ courseId, setCourseId ] = React.useState('');
    const { allCourses, setAllCourses } = useContext(AllCoursesContext);
    const [ loading, setLoading ] = React.useState(false);
    const [ joinLink, setJoinLink ] = React.useState("");
    const [ startTime, setStartTime ] = React.useState(new Date(Date.now()));
    const [ duration, setDuration ] = React.useState(1);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCourseId(event.target.value as string);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        const linkCipher = cipher(process.env.REACT_APP_M_NHI_BTAUNGA)(joinLink);
        const isUpdated = await updateCourse(courseId, {
            event: {
                duration,
                startTime: firebase.firestore.Timestamp.fromDate(startTime),
                joinLink: linkCipher as unknown as string
            }
        });
        if ( isUpdated ) {
            setSnackbarDefinition({
                severity: 'success',
                message: 'Successfully updated course!!',
                visible: true
            });
        } else {
            setSnackbarDefinition({
                severity: 'error',
                message: 'Error in updating course',
                visible: true
            });
        }
        setLoading(false);

    };

    useEffect(() => {
        if ( allCourses.length === 0 ) {
            ( async () => {
                const allCoursesResponse = await fetchAllCourses();
                if ( typeof allCoursesResponse === 'string' ) {
                    setSnackbarDefinition({
                        visible: true,
                        severity: 'error',
                        message: allCoursesResponse
                    });
                } else
                    setAllCourses(allCoursesResponse);
            } )();
        }
    }, [ allCourses, setSnackbarDefinition, setAllCourses ]);

    return allCourses.length < 1 ? <Loader/> : <div className={ classes.parentDiv }>
        <FormControl className={ classes.formControl }>
            <InputLabel id="demo-simple-select-helper-label">Choose Course Name</InputLabel>
            <Select
                value={ courseId }
                onChange={ handleChange }
            >
                { allCourses.map((course, idx) =>
                    <MenuItem key={ idx } value={ course.id }>
                        { course.name }
                    </MenuItem>) }
            </Select>
        </FormControl>
        <TextField margin={ "normal" }
                   label={ "Join Link" }
                   onChange={ (e) => setJoinLink(e.target.value) }
                   value={ joinLink }
                   type={ 'text' }
                   variant="outlined"/>
        <TextField margin={ "normal" }
                   label={ "Duration" }
                   onChange={ (e) => setDuration(Number.parseFloat(e.target.value)) }
                   value={ duration }
                   inputProps={ { min: "1", max: "4" } }
                   type={ 'number' }
                   variant="outlined"/>
        <DateTimePicker
            value={ startTime }
            disablePast
            onChange={ setStartTime }
            label="Choose StartTime"
            showTodayButton
        />
        <Button variant="contained"
                disabled={ courseId === "" || joinLink === "" }
                color="primary"
                onClick={ handleSubmit } className={ buttonClasses.button }>
            { !loading ? 'Add Class Event' : <CircularProgress/> }
        </Button>
    </div>
};
