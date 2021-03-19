import React, {useContext, useRef} from 'react';
import {Accordion} from "react-bootstrap";
import {Button, TextField} from "@material-ui/core";
import {Individual} from "../../models/individual";
import {UserDetailsContext} from "../../contexts/user-details";

const EditProfile = () => {
    const user = useContext(UserDetailsContext).user as Individual;
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const passwordRef = useRef(null);

    return <div>
        <>
            <TextField
                margin={"normal"}
                label="Email"
                type='text'
                ref={emailRef}
                value={user.email}
                variant="outlined"/>
        </>
        <br/>
        <TextField
            margin={"normal"}
            label="Name"
            type='text'
            ref={nameRef}
            value={user.name}
            variant="outlined"/>
        <Accordion>
            <Accordion.Toggle eventKey="0" style={{padding: '0', marginBottom: '1rem'}}>
                <Button variant="contained" color={'primary'} onClick={() => {
                }}>
                    Change Password
                </Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <>
                    <TextField
                        margin={"normal"}
                        label="Old Password"
                        type='password'
                        ref={confirmPasswordRef}
                        variant="outlined"/>
                    <br/>
                    <TextField
                        margin={"normal"}
                        label="New Password"
                        type='password'
                        ref={passwordRef}
                        variant="outlined"/>
                    <br/>
                    <Button variant="outlined" onClick={() => {
                    }}>
                        Submit
                    </Button>
                </>
            </Accordion.Collapse>
        </Accordion>
    </div>
};

export default EditProfile;