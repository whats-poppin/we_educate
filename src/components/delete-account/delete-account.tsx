import React, { useContext, useState } from 'react';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { useLoginSignupStyles } from "../../utils/component-styles/login-signup";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";
import { deleteAccount } from "../../controllers/auth-controller";
import { AuthContext } from "../../contexts/auth";

const DeleteAccount = () => {
    const [ showModal, setShowModal ] = useState(false);
    const history = useHistory();
    const classes = useLoginSignupStyles();
    const { authStatus } = useContext(AuthContext);
    const [ loading, setLoading ] = useState(false);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const [ password, setPassword ] = useState("");

    const handleDeleteAccount = async () => {
        setLoading(true);
        const result = authStatus?.providerData[0].providerId === 'password' && password.length <= 7 ?
            await deleteAccount(password) : await deleteAccount();
        if ( result ) {
            if ( result === 'success' ) {
                setSnackbarDefinition({
                    visible: true,
                    severity: 'success',
                    message: 'Successfully Deleted Account'
                });
                setLoading(false);
                history.push('/auth');
            } else {
                setSnackbarDefinition({
                    visible: true,
                    severity: 'error',
                    message: result
                });
                setLoading(false);
            }
        }
    };

    return <>
        <div style={ { marginTop: '2rem' } }>
            <h3 style={ { margin: '2rem 0' } }>
                This is the danger zone
            </h3>
            Are you sure, you want to delete your account?
            <br/>
            <br/>
            <Button variant={ 'contained' } color={ 'primary' } onClick={ () => {
                setShowModal(true);
            } }>
                Delete Account
            </Button>
        </div>
        <Dialog
            open={ showModal }
            onClose={ () => {
                setShowModal(false);
            } }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                 To Continue
            </DialogTitle>
            <DialogContent>
                { authStatus?.providerData[0].providerId === 'password' ?
                    <React.Fragment>
                        <DialogContentText
                            id="alert-dialog-description">
                            Enter your password.
                        </DialogContentText>
                        <TextField className={ classes.inputLogin }
                                   id="outlined-basic"
                                   onChange={ (e) => {
                                       setPassword(e.target.value)
                                   } }
                                   value={ password }
                                   margin={ "normal" }
                                   label="Password"
                                   type="password"
                                   helperText={ '*Length should be greater than 7' }
                                   variant="outlined"/>
                    </React.Fragment> : <>
                        Re-Authenticate
                    </> }
            </DialogContent>
            <DialogActions>
                <Button onClick={ () => {
                    setShowModal(false);
                } } color="primary">
                    Cancel
                </Button>
                <Button onClick={ handleDeleteAccount } color="primary" autoFocus>
                    { !loading ? 'Delete' : <CircularProgress/> }
                </Button>
            </DialogActions>
        </Dialog>
    </>
};

export default DeleteAccount;