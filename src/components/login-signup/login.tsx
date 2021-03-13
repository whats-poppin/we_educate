import React, {useState} from "react";
import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
import {Button, Grid, TextField} from "@material-ui/core";
import {FaFacebookF, FaGoogle, FaLinkedinIn} from "react-icons/all";

const SignUp = () => {
    const classes = useLoginSignupStyles();

    return <form className={classes.form} noValidate autoComplete="off">
        <h1 className={classes.h1}>Create Account</h1>
        <div className={classes.socialContainer}>
            <a href="#" className={classes.social}><FaFacebookF/></a>
            <a href="#" className={classes.social}><FaGoogle/></a>
            <a href="#" className={classes.social}><FaLinkedinIn/></a>
        </div>
        <span style={{paddingTop: 20}}>or use your email</span>
        <TextField className={classes.input} id="outlined-basic"
                   margin={"normal"}
                   label="Email"
                   type={'text'}
                   variant="outlined"/>
        <TextField className={classes.input}
                   id="outlined-basic"
                   margin={"normal"}
                   label="Password"
                   type={'password'}
                   variant="outlined"/>
        <TextField className={classes.input}
                   id="outlined-basic"
                   margin={"normal"}
                   label="Confirm Password"
                   type={'password'}
                   variant="outlined"/>
        <Button variant="contained" color="primary" className={classes.button}>Sign Up</Button>
    </form>
};

const Login = () => {
    const classes = useLoginSignupStyles();

    return <form className={classes.form} noValidate autoComplete="off">
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
};

export const LoginSignupForm = () => {
    const classes = useLoginSignupStyles();
    const [showLogin, setShowLogin] = useState(false);

    return (
        <Grid container justify="center" className={classes.rootContainer} spacing={0}>
            <Grid key={0} item>
                {showLogin ? <Login/> : <SignUp/>}
            </Grid>
            <Grid key={1} item>
                <div className={classes.overlay}>
                    <h1>{showLogin ? 'Hello, Friend!' : 'Welcome Back!'}</h1>
                    <p>{showLogin ? 'Enter your personal details and start journey with us' : 'To keep connected with us please login with your personal info'}</p>
                    <Button variant="contained" color="primary" onClick={() => {
                        setShowLogin(!showLogin)
                    }}
                            className={classes.button}>{showLogin ? 'Sign Up' : 'Sign In'}</Button>
                </div>
            </Grid>
        </Grid>
    );
}

