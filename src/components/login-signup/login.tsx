import React, {useState} from "react";
import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
import {Button, Grid, Slide, TextField} from "@material-ui/core";
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

const LoginLayout = (props: { setShowLogin: any; showLogin: boolean; }) => {
    const classes = useLoginSignupStyles();
    const {setShowLogin, showLogin} = props;
    return <Grid container justify="center" className={classes.rootContainer} spacing={0}>
        <Slide direction='right' in={showLogin}>
            <Grid key={1} item>
                <div className={classes.overlay}>
                    <h1>{'Hello, Friend!'}</h1>
                    <p>{'Enter your personal details and start journey with us'}</p>
                    <Button variant="contained" color="primary" onClick={() => {
                        setShowLogin(false);
                    }}
                            className={classes.button}>{'Sign Up'}</Button>
                </div>
            </Grid>
        </Slide>
        <Slide direction='right' in={showLogin}>
            <Grid key={0} item>
                {<Login/>}
            </Grid>
        </Slide>
    </Grid>
};

const SignUpLayout = (props: { setShowLogin: any; showLogin: boolean; }) => {
    const classes = useLoginSignupStyles();
    const {setShowLogin, showLogin} = props;
    return <Grid container justify="center" className={classes.rootContainer} spacing={0}>
        <Slide direction='left' in={!showLogin}>
            <Grid key={0} item>
                {<SignUp/>}
            </Grid>
        </Slide>
        <Slide direction='left' in={!showLogin}>
            <Grid key={1} item>
                <div className={classes.overlay}>
                    <h1>{'Welcome Back!'}</h1>
                    <p>{'To keep connected with us please login with your personal info'}</p>
                    <Button variant="contained" color="primary" onClick={() => {
                        setShowLogin(true)
                    }}
                            className={classes.button}>{'Sign In'}</Button>
                </div>
            </Grid>
        </Slide>
    </Grid>;
};

export const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return showLogin ? <LoginLayout setShowLogin={setShowLogin} showLogin={showLogin}/>
        : <SignUpLayout setShowLogin={setShowLogin} showLogin={showLogin}/>;
};

