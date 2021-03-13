import React, {useState} from "react";
import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
import {Button, Grid, Slide, TextField} from "@material-ui/core";
import {FaFacebookF, FaGoogle, FaLinkedinIn} from "react-icons/all";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';


const SignUp = (props: { setShowLogin: any; matches: boolean }) => {
    const classes = useLoginSignupStyles();
    const {matches, setShowLogin} = props;
    return <form className={classes.form} noValidate autoComplete="off">
        <h1 className={classes.h1}>Create Account</h1>
        <div className={classes.socialContainer}>
            <a href="#" className={classes.social}><FaFacebookF/></a>
            <a href="#" className={classes.social}><FaGoogle/></a>
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
        {
            matches ? ""
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

const Login = (props: { setShowLogin: any; matches: boolean }) => {
    const classes = useLoginSignupStyles();
    const {matches, setShowLogin} = props;

    return <form className={classes.form} noValidate autoComplete="off">
        <h1 className={classes.h1}>Sign In</h1>
        <div className={classes.socialContainer}>
            <a href="#" className={classes.social}><FaFacebookF/></a>
            <a href="#" className={classes.social}><FaGoogle/></a>
        </div>
        <span style={{paddingTop: 20}}>or use your account</span>
        <TextField className={classes.input} id="outlined-basic" margin={"normal"} label="Email"
                   variant="outlined"/>
        <TextField className={classes.input} id="outlined-basic" margin={"normal"} label="Password"
                   variant="outlined"/>
        <a href="#" style={{paddingTop: 20, textDecoration: 'none', color: '#333333'}}>Forgot your
            password?</a>
        <Button variant="contained" color="primary" className={classes.button}>Sign In</Button>
        {
            matches ? ""
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

const LoginLayout = (props: { setShowLogin: any; matches: boolean; showLogin: boolean; }) => {
    const classes = useLoginSignupStyles();
    const {setShowLogin, showLogin, matches} = props;
    return <Grid container justify="center" className={matches ? classes.rootContainer : ""} spacing={0}>
        {matches ? <Slide direction='right' in={showLogin}>
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
            : <div/>}
        <Slide direction='right' in={showLogin}>
            <Grid key={0} item>
                {<Login setShowLogin={setShowLogin} matches={matches}/>}
            </Grid>
        </Slide>
    </Grid>
};

const SignUpLayout = (props: { setShowLogin: any; matches: boolean; showLogin: boolean; }) => {

    const classes = useLoginSignupStyles();
    const {setShowLogin, showLogin, matches} = props;
    return <Grid container justify="center" className={matches ? classes.rootContainer : ""} spacing={0}>
        <Slide direction='left' in={!showLogin}>
            <Grid key={0} item>

                {<SignUp matches={matches} setShowLogin={setShowLogin}/>}


            </Grid>

        </Slide>
        {matches ? <Slide direction='left' in={!showLogin}>
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
        </Slide> : <div/>}
    </Grid>;
};

export const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return showLogin ? <LoginLayout setShowLogin={setShowLogin} matches={matches} showLogin={showLogin}/>
        : <SignUpLayout setShowLogin={setShowLogin} matches={matches} showLogin={showLogin}/>;
};

