import React, {useState} from "react";
import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
import {Button, Grid, Slide, TextField} from "@material-ui/core";
import {FaFacebookF, FaGoogle} from "react-icons/all";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';


const SignUp = (props: { setShowLogin: any; notMedium: boolean }) => {
    const classes = useLoginSignupStyles();
    const {notMedium, setShowLogin} = props;
    return <form className={classes.form} noValidate autoComplete="off" style={notMedium ? {} : {marginTop:'5rem'}}>
        <h1 className={classes.h1}>Create Account</h1>
        <div className={classes.socialContainer}>
            <div onClick={() => {
            }} className={classes.social}><FaFacebookF/>
            </div>
            <div onClick={() => {
            }} className={classes.social}><FaGoogle/>
            </div>
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

const Login = (props: { setShowLogin: any; notMedium: boolean }) => {
    const classes = useLoginSignupStyles();
    const {notMedium, setShowLogin} = props;

    return <form className={classes.form} noValidate autoComplete="off" style={notMedium ? {} : {marginTop:'5rem'}}>
        <h1 className={classes.h1}>Sign In</h1>
        <div className={classes.socialContainer}>
            <div onClick={() => {
            }} className={classes.social}><FaFacebookF/></div>
            <div onClick={() => {
            }} className={classes.social}><FaGoogle/></div>
        </div>
        <span style={{paddingTop: 20}}>or use your account</span>
        <TextField className={classes.input} id="outlined-basic" margin={"normal"} label="Email"
                   variant="outlined"/>
        <TextField className={classes.input} id="outlined-basic" margin={"normal"} label="Password"
                   variant="outlined"/>
        <div style={{paddingTop: 20, textDecoration: 'none', color: '#333333'}} onClick={() => {
        }}>
            Forgot your password?
        </div>
        <Button variant="contained" color="primary" className={classes.button}>Sign In</Button>
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

const LoginLayout = (props: { setShowLogin: any; notMedium: boolean; showLogin: boolean; }) => {
    const classes = useLoginSignupStyles();
    const {setShowLogin, showLogin, notMedium} = props;
    return <Grid container justify="center" className={notMedium ? classes.rootContainer : ""} spacing={0}>
        {notMedium ? <Slide direction='right' in={showLogin}>
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
                {<Login setShowLogin={setShowLogin} notMedium={notMedium}/>}
            </Grid>
        </Slide>
    </Grid>
};

const SignUpLayout = (props: { setShowLogin: any; notMedium: boolean; showLogin: boolean; }) => {

    const classes = useLoginSignupStyles();
    const {setShowLogin, showLogin, notMedium} = props;
    return <Grid container justify="center" className={notMedium ? classes.rootContainer : ""} spacing={0}>
        <Slide direction='left' in={!showLogin}>
            <Grid key={0} item>
                {<SignUp notMedium={notMedium} setShowLogin={setShowLogin}/>}
            </Grid>
        </Slide>
        {notMedium ? <Slide direction='left' in={!showLogin}>
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
    const notMedium = useMediaQuery(theme.breakpoints.up('md'));

    return showLogin ? <LoginLayout setShowLogin={setShowLogin} notMedium={notMedium} showLogin={showLogin}/>
        : <SignUpLayout setShowLogin={setShowLogin} notMedium={notMedium} showLogin={showLogin}/>;
};

