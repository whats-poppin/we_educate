import React from "react";
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
// import { Container } from "@material-ui/core";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from '@material-ui/core';

export const LoginSignupForm = () => {
    const classes = useLoginSignupStyles();
    return (
        <div className = {classes.rootContainer}>
            <div className={classes.formContainer}>
                <form className={classes.form} noValidate autoComplete="off">
                    <h1 className={classes.h1}>Sign In</h1>
                    <div className={classes.socialContainer}>
                        <a href="/" className={classes.social}><FaFacebookF/></a>
                        <a href="/" className={classes.social}><FaGoogle/></a>
                        <a href="/" className={classes.social}><FaLinkedinIn/></a>
                    </div>
                    <span style={{paddingTop: 20}}>or use your account</span>
                    <TextField className={classes.input}id="outlined-basic"  margin={"normal"} label="Email" variant="outlined"/>
                    <TextField className={classes.input}id="outlined-basic" margin={"normal"} label="Password" variant="outlined" />
                    <a href="/" style={{paddingTop: 20,  textDecoration:'none', color:'#333333'}} >Forgot your password?</a>
			        <Button variant="contained" color="primary" className={classes.button}>Sign In</Button>
                </form>
                <div className={classes.overlayContainer}>
                    <div className={classes.overlay}>
                        <div className={classes.overlayPanel && classes.overlayLeft}>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className={classes.ghost} id="signIn">Sign In</button>
                        </div>
                        <div className={classes.overlayPanel && classes.overlayRight}>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className={classes.ghost} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

