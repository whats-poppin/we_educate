import React from "react";
import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
import {Button, Grid, TextField} from "@material-ui/core";
import {FaFacebookF, FaGoogle, FaLinkedinIn} from "react-icons/all";

export const LoginSignupForm = () => {
    const classes = useLoginSignupStyles();
    return (
        <Grid container justify="center" className={classes.rootContainer} spacing={0}>
            <Grid key={0} item>
                <form className={classes.form} noValidate autoComplete="off">
                    <h1 className={classes.h1}>Sign In</h1>
                    <div className={classes.socialContainer}>
                        <a href="#" className={classes.social}><FaFacebookF/></a>
                        <a href="#" className={classes.social}><FaGoogle/></a>
                        <a href="#" className={classes.social}><FaLinkedinIn/></a>
                    </div>
                    <span style={{paddingTop: 20}}>or use your account</span>
                    <TextField className={classes.input} id="outlined-basic" margin={"normal"} label="Email"
                               variant="outlined"/>
                    <TextField className={classes.input} id="outlined-basic" margin={"normal"} label="Password"
                               variant="outlined"/>
                    <a href="#" style={{paddingTop: 20, textDecoration: 'none', color: '#333333'}}>Forgot your
                        password?</a>
                    <Button variant="contained" color="primary" className={classes.button}>Sign In</Button>
                </form>
            </Grid>
            <Grid key={1} item>
                <div className={classes.overlay}>
                    <div>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                    </div>
                    <div>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <Button variant="contained" color="primary" className={classes.button}>Sign In</Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

