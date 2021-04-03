import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const DeleteAccount = () => {
    const [ showModal, setShowModal ] = useState(false);

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
                <DialogContentText id="alert-dialog-description">
                    Enter your password.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ () => {
                    setShowModal(false);
                } } color="primary">
                    Cancel
                </Button>
                <Button onClick={ () => {
                    setShowModal(false);
                } } color="primary" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    </>
};

export default DeleteAccount;