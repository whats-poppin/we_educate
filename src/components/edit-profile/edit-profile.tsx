import React, { useContext, useState } from 'react';
import { Accordion } from "react-bootstrap";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    IconButton,
    TextField,
    Typography
} from "@material-ui/core";
import { UserDetailsContext } from "../../contexts/user-details";
import { auth } from "../../firebase";
import { updateName } from "../../controllers/individual-controller";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";
import { TiTick } from "react-icons/all";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { colors } from "../../utils/constants";
import Tooltip from "@material-ui/core/Tooltip";
import { changePassword } from "../../controllers/auth-controller";
import { OrganisationDetailsContext } from "../../contexts/organisation-details";
import { updateOrganisationName } from "../../controllers/organisation-controller";

const EditProfile = () => {
    const { user, setUser } = useContext(UserDetailsContext);
    const { organisation, setOrganisation } = useContext(OrganisationDetailsContext);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const notSmall = useMediaQuery('(min-width:352px)');

    const [ loading, setLoading ] = useState(false);
    const [ name, setName ] = useState(user ? user.name : organisation.orgName);
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ password, setPassword ] = useState('');

    const handlePasswordChange = async () => {
        setLoading(true);
        const resultMessage = await changePassword(password, newPassword);
        if ( resultMessage === 'success' ) {
            setSnackbarDefinition({
                visible: true,
                severity: 'success',
                message: "Successfully updated password"
            });
        } else {
            setSnackbarDefinition({
                visible: true,
                severity: 'error',
                message: resultMessage
            });
        }
        setLoading(false);
    };

    const handleNameChange = async () => {
        if ( user ) {
            if ( user.name !== name ) {
                const isChanged = await updateName(name);
                if ( isChanged ) {
                    setUser({ ...user, name });
                    setSnackbarDefinition({
                        visible: true,
                        severity: 'success',
                        message: "Successfully updated name"
                    });
                } else setSnackbarDefinition({
                    visible: true,
                    severity: 'error',
                    message: "Error in updating name"
                });
            }
        } else {
            if ( organisation.orgName !== name ) {
                const isChanged = await updateOrganisationName(name);
                if ( isChanged ) {
                    setOrganisation({ ...organisation, orgName: name });
                    setSnackbarDefinition({
                        visible: true,
                        severity: 'success',
                        message: "Successfully updated name"
                    });
                } else setSnackbarDefinition({
                    visible: true,
                    severity: 'error',
                    message: "Error in updating name"
                });
            }
        }
    };

    return <div>
        <Card>
            <CardHeader
                title="Account Details"
            />
            <CardContent>
                <Typography>
                    Name: { user ? user.name : organisation.orgName }
                </Typography>
                <Typography>
                    Email: { user ? user.email : organisation.email }
                </Typography>
                { user && <Typography>
                    Joined on: { user.createdAt.toDate().toLocaleString() }
                </Typography> }
                <Typography>
                    { user ? user.product.length === 0 ? 'Not enrolled in any course.' :
                        `Enrolled in ${ user.product.length } ${ user.product.length === 1 ? 'program.' :
                            'programs.' }` : organisation.products.length === 0 ? 'Not enrolled in any course.' :
                        `Enrolled in ${ organisation.products.length } ${ organisation.products.length === 1 ? 'program.'
                            : 'programs.' }`
                    }
                </Typography>
            </CardContent>
        </Card>
        <TextField
            margin={ "normal" }
            label="Name"
            type='text'
            onChange={ (e) => {
                setName(e.target.value)
            } }
            value={ name }
            variant="outlined"/>
        { notSmall ? <Tooltip title="Save Name" placement="right">
                <IconButton onClick={ handleNameChange } size={ 'small' }
                            style={ {
                                marginTop: '2rem',
                                marginLeft: '5px',
                                backgroundColor: colors.lightGrey
                            } }>
                    <TiTick/>
                </IconButton>
            </Tooltip> :
            <Button disabled={ user ? user.name === name : organisation.orgName === name } onClick={ handleNameChange }
                    variant="contained"
                    color={ 'primary' }>
                Save Name
            </Button> }
        <br/>
        <br/>
        { auth?.currentUser?.providerData[0]?.providerId === 'password' ? <>
            <Accordion>
                <Accordion.Toggle eventKey="0" style={ { padding: '0', marginBottom: '1rem' } }>
                    <Button variant="contained" color={ 'primary' } onClick={ () => {
                    } }>
                        Update Password
                    </Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <>
                        <br/>
                        <TextField
                            margin={ "normal" }
                            label="Old Password"
                            type='password'
                            onChange={ (e) => setPassword(e.target.value) }
                            value={ password }
                            variant="outlined"/>
                        <br/>
                        <TextField
                            margin={ "normal" }
                            label="New Password"
                            type='password'
                            onChange={ (e) => setNewPassword(e.target.value) }
                            value={ newPassword }
                            variant="outlined"/>
                        <br/>
                        <TextField
                            margin={ "normal" }
                            label="Confirm Password"
                            type='password'
                            onChange={ (e) => setConfirmPassword(e.target.value) }
                            value={ confirmPassword }
                            variant="outlined"/>
                        <br/>
                        <Button variant="outlined" disabled={ confirmPassword !== newPassword }
                                onClick={ handlePasswordChange }>
                            { !loading ? 'Submit' : <CircularProgress/> }
                        </Button>
                    </>
                </Accordion.Collapse>
            </Accordion>
        </> : null }
    </div>
};

export default EditProfile;
