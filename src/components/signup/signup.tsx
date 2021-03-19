import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
import {useHistory, useLocation} from "react-router-dom";
import React, {useContext, useState} from "react";
import {FaFacebookF, FaGoogle} from "react-icons/all";
import {Button, TextField} from "@material-ui/core";
import {signup, socialAuth} from "../../controllers/auth-controller";
import {SnackbarToggleContext} from "../../contexts/snackbar-toggle";
import {AuthContext} from "../../contexts/auth";
import {Individual} from "../../models/individual";

export const SignUp = (props: { setShowLogin: any; notMedium: boolean }) => {
    const classes = useLoginSignupStyles();
    const {setSnackbarDefinition} = useContext(SnackbarToggleContext);
    const {setUser} = useContext(AuthContext);
    const history = useHistory();

    const {notMedium, setShowLogin} = props;
    const location = useLocation();

    const [email, setEmail] = useState((location.state as { email: string, type: string })?.email ?? "");
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    const validateEmail = () => {
        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");
        return (atPos < 1 || (dotPos - atPos < 2));
    };

    const checkResult = (result: Individual | string) => {
        if (typeof result !== 'string') {
            setSnackbarDefinition({
                severity: 'success',
                message: 'Signup successful!',
                visible: true
            });
            setUser(result);
            history.push('/');
        } else
            setSnackbarDefinition({
                severity: 'error',
                message: result,
                visible: true
            });
    };

    return <form className={classes.form} noValidate autoComplete="off" style={notMedium ? {} : {marginTop: '5rem'}}>
        <h1 className={classes.h1}>Create Account</h1>
        <div className={classes.socialContainer}>
            <div
                onClick={async () => {
                    const result = await socialAuth('facebook');
                    checkResult(result);
                }} className={classes.social}><FaFacebookF/>
            </div>
            <div
                onClick={async () => {
                    const result = await socialAuth('google');
                    checkResult(result);
                }} className={classes.social}><FaGoogle/>
            </div>
        </div>

        <span style={{paddingTop: 20}}>or use your email</span>
        <TextField className={classes.input} id="outlined-basic"
                   margin={"normal"}
                   label="Name"
                   onChange={(e) => setName(e.target.value)}
                   value={name}
                   type={'text'}
                   variant="outlined"/>
        <TextField className={classes.input} id="outlined-basic"
                   margin={"normal"}
                   label="Email"
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}
                   type={'email'}
                   variant="outlined"/>
        <TextField className={classes.input}
                   id="outlined-basic"
                   margin={"normal"}
                   label="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   type={'password'}
                   variant="outlined"/>
        <TextField className={classes.input}
                   id="outlined-basic"
                   margin={"normal"}
                   label="Confirm Password"
                   value={confirmPassword}
                   onChange={(e) => setConfirmPassword(e.target.value)}
                   type={'password'}
                   variant="outlined"/>
        <Button variant="contained"
                disabled={!(!validateEmail() && password.length >= 8 && confirmPassword === password && name.length >= 1)}
                color="primary"
                onClick={async (event) => {
                    const result = await signup(event, email, password, name);
                    checkResult(result);
                }} className={classes.button}>
            Sign Up
        </Button>
        {
            notMedium ? ""
                : <div>
                    <span style={{paddingTop: 20}}>or</span>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => {
                        setShowLogin(true)
                    }}
                            className={classes.button}>{'Sign In Instead'}</Button>
                </div>
        }
    </form>
};