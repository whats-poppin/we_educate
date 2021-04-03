import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AllCoursesContext } from "../contexts/all-courses";
import { fetchAllCourses } from "../controllers/courses-controller";
import { SnackbarToggleContext } from "../contexts/snackbar-toggle";
import { Product } from "../models/product";
import { Loader } from "../components/loader/loader";
import { UserDetailsContext } from "../contexts/user-details";
import { Accordion, AccordionDetails, Typography } from "@material-ui/core";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { BiDownArrow } from "react-icons/all";
import { decipher } from "../utils/encrypt-decrypt";

export const Course = () => {
    const location = useLocation();
    const history = useHistory();
    const { user } = useContext(UserDetailsContext);
    const { allCourses, setAllCourses } = useContext(AllCoursesContext);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const [ selectedCourse, setSelectedCourse ] = useState<Product>(null);
    const [ ownedCourse, setOwnedCourse ] = useState(false);
    const myDecipher = decipher(process.env.REACT_APP_M_NHI_BTAUNGA);

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
        const urlParams = new URLSearchParams(location.search);
        const id = urlParams.get('id');
        if ( !id ) history.push('/');
        else {
            for ( const course of allCourses ) {
                if ( course.id === id ) {
                    setSelectedCourse(course)
                    break;
                }
            }
            const ownedCourse = ( () => user?.product.includes(id) )();
            setOwnedCourse(ownedCourse);
        }
    }, [ allCourses, location, setSnackbarDefinition, setAllCourses, history, user ]);

    return selectedCourse ?
        <>
            <h2 style={ { marginTop: '20rem' } }>
                { selectedCourse.name }
            </h2>
            { ownedCourse ? <Accordion TransitionProps={ { unmountOnExit: true } }>
                <AccordionSummary
                    expandIcon={ <BiDownArrow/> }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        Events
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    { selectedCourse.events.map((e) =>
                        <Typography>
                            { myDecipher(e.joinLink) }
                        </Typography>) }
                </AccordionDetails>
            </Accordion> : null }
        </>
        : <Loader/>;
};