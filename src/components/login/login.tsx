import { useLoginSignupStyles } from "../../utils/component-styles/login-signup";
import React, { useContext, useState } from "react";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { forgotPassword, login } from "../../controllers/auth-controller";
import { useHistory } from "react-router-dom";
import { Individual } from "../../models/individual";
import { UserDetailsContext } from "../../contexts/user-details";
import { SocialAuth } from "../signup/signup";

export const Login = (props: { setShowLogin: any; notMedium: boolean; }) => {
    const classes = useLoginSignupStyles();
    const { setUser } = useContext(UserDetailsContext);
    const history = useHistory();
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const [ loading, setLoading ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const { notMedium, setShowLogin } = props;

    const validateEmail = () => {
        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");
        return ( atPos < 1 || ( dotPos - atPos < 2 ) );
    }

    const checkResult = (result: Individual | string) => {
        if ( typeof result !== 'string' ) {
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

    return <form className={ classes.form } noValidate autoComplete="off"
                 style={ notMedium ? {} : { marginTop: '5rem' } }>
        <h1 className={ classes.h1 }>Sign In</h1>
        <SocialAuth checkResult={ checkResult }/>

        <span style={ { paddingTop: 20 } }>or use your account</span>

        <TextField
            className={ classes.inputLogin }
            id="outlined-basic"
            onChange={ (e) => setEmail(e.target.value) }
            value={ email }
            margin={ "normal" }
            label="Email"
            type='email'
            variant="outlined"/>
        <TextField
            className={ classes.inputLogin }
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
        <div style={ {
            paddingTop: 20,
            textDecoration: 'none',
            color: '#333333',
            cursor: 'pointer'
        } as React.CSSProperties }
             onClick={ async () => {
                 if ( !email ) {
                     setSnackbarDefinition({
                         severity: 'error',
                         message: 'Please enter your email',
                         visible: true
                     });
                 } else {
                     const result = await forgotPassword(email);
                     if ( !result )
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
             } }>
            Forgot your password?
        </div>
        <Button variant="contained" color="primary"
                disabled={ !( !validateEmail() && password.length >= 8 ) && loading }
                onClick={ async (event) => {
                    setLoading(true);
                    const result = await login(event, email, password);
                    checkResult(result);
                    setLoading(false);
                } }
                className={ classes.button }>
            { !loading ? 'Sign In' : <CircularProgress/> }
        </Button>
        {
            notMedium ? ""
                : <>
                    <span style={ { paddingTop: 20 } }>or</span>
                    <br/>
                    <Button variant="contained" color="primary" onClick={ () => {
                        setShowLogin(false);
                    } }
                            className={ classes.button }>{ 'Sign Up Instead' }</Button>
                </>
        }
    </form>
};
