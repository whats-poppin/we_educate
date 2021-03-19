import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
import React, {useContext, useState} from "react";
import {SnackbarToggleContext} from "../../contexts/snackbar-toggle";
import {FaFacebookF, FaGoogle} from "react-icons/all";
import {Button, TextField} from "@material-ui/core";
import {forgotPassword, login, socialAuth} from "../../controllers/auth-controller";
import {useHistory} from "react-router-dom";
import {Individual} from "../../models/individual";
import {UserDetailsContext} from "../../contexts/user-details";

export const Login = (props: { setShowLogin: any; notMedium: boolean; }) => {
    const classes = useLoginSignupStyles();
    const {setUser} = useContext(UserDetailsContext);
    const history = useHistory();
    const {setSnackbarDefinition} = useContext(SnackbarToggleContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {notMedium, setShowLogin} = props;

    const validateEmail = () => {
        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");
        return (atPos < 1 || (dotPos - atPos < 2));
    }

    const checkResult = (result: Individual | string) => {
        if (typeof result !== 'string') {
            setSnackbarDefinition({
                severity: 'success',
                message: 'Sign in successful!',
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
        <h1 className={classes.h1}>Sign In</h1>
        <div className={classes.socialContainer}>
            <div
                onClick={async () => {
                    const result = await socialAuth('facebook');
                    checkResult(result);
                }}
                className={classes.social}>
                <FaFacebookF/>
            </div>
            <div
                onClick={async () => {
                    const result = await socialAuth('google');
                    checkResult(result);
                }}
                className={classes.social}>
                <FaGoogle/>
            </div>
        </div>

        <span style={{paddingTop: 20}}>or use your account</span>

        <TextField
            className={classes.inputLogin}
            id="outlined-basic"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            margin={"normal"}
            label="Email"
            type='email'
            variant="outlined"/>
        <TextField
            className={classes.inputLogin}
            id="outlined-basic"
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            value={password}
            margin={"normal"}
            label="Password"
            type="password"
            variant="outlined"/>
        <div style={{paddingTop: 20, textDecoration: 'none', color: '#333333'}}
             onClick={async () => {
                 if (!email) {
                     setSnackbarDefinition({
                         severity: 'error',
                         message: 'Please enter your email',
                         visible: true
                     });
                 } else {
                     const result = await forgotPassword(email);
                     if (!result)
                         setSnackbarDefinition({
                             severity: 'success',
                             message: 'Password Reset mail sent!',
                             visible: true
                         });
                     else
                         setSnackbarDefinition({
                             severity: 'error',
                             message: result,
                             visible: true
                         });
                 }
             }}>
            Forgot your password?
        </div>
        <Button variant="contained" color="primary"
                disabled={!(!validateEmail() && password.length >= 8)}
                onClick={async (event) => {
                    const result = await login(event, email, password);
                    checkResult(result);
                }}
                className={classes.button}>
            Sign In
        </Button>
        {
            notMedium ? ""
                : <>
                    <span style={{paddingTop: 20}}>or</span>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => {
                        setShowLogin(false);
                    }}
                            className={classes.button}>{'Sign Up Instead'}</Button>
                </>
        }
    </form>
};
