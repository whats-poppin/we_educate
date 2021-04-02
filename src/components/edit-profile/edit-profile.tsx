import React, { useContext, useState } from 'react';
import { Accordion } from "react-bootstrap";
import { Button, IconButton, TextField } from "@material-ui/core";
import { Individual } from "../../models/individual";
import { UserDetailsContext } from "../../contexts/user-details";
import { auth } from "../../firebase";
import { updateName } from "../../controllers/individual-controller";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";
import { TiTick } from "react-icons/all";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { colors } from "../../utils/constants";
import Tooltip from "@material-ui/core/Tooltip";

const EditProfile = () => {
    const user = useContext(UserDetailsContext).user as Individual;
    const { setUser } = useContext(UserDetailsContext);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const [ email, setEmail ] = useState(user.email);
    const [ name, setName ] = useState(user.name);
    const notSmall = useMediaQuery('(min-width:352px)');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleNameChange = async () => {
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
    };

    return <div>
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
                <TiTick title={ "Save Name" }/>
            </IconButton>
        </Tooltip> : <Button onClick={ handleNameChange } variant="contained" color={ 'primary' }>
            Save Name
        </Button> }
        <br/>
        <br/>
        { auth?.currentUser.providerData[0].providerId === 'password' ? <>
            <Accordion>
                <Accordion.Toggle eventKey="0" style={ { padding: '0', marginBottom: '1rem' } }>
                    <Button variant="contained" color={ 'primary' } onClick={ () => {
                    } }>
                        Change Credentials
                    </Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <>
                        <TextField
                            margin={ "normal" }
                            label="Email"
                            type='text'
                            value={ email }
                            onChange={ (e) => setEmail(( e.target.value )) }
                            variant="outlined"/>
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
                            onChange={ (e) => setConfirmPassword(e.target.value) }
                            value={ confirmPassword }
                            variant="outlined"/>
                        <br/>
                        <Button variant="outlined" onClick={ () => {
                        } }>
                            Submit
                        </Button>
                    </>
                </Accordion.Collapse>
            </Accordion>
        </> : null }
    </div>
};

export default EditProfile;