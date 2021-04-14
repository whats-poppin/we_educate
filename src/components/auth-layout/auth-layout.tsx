import React, { useState } from "react";
import { useLoginSignupStyles } from "../../utils/component-styles/login-signup";
import { Button, Grid, Slide } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { SignUp } from "../signup/signup";
import { Login } from "../login/login";

const LoginLayout = (props: { setShowLogin: any; notMedium: boolean; showLogin: boolean; }) => {
    const classes = useLoginSignupStyles();
    const { setShowLogin, showLogin, notMedium } = props;
    return <Grid container justify="center" className={ notMedium ? classes.rootContainer : "" } spacing={ 0 }>
        { notMedium ? <Slide direction='right' in={ showLogin }>
                <Grid key={ 1 } item>
                    <div className={ classes.overlay }>
                        <h1>{ 'Hello, Friend!' }</h1>
                        <p>{ 'Enter your personal details and start journey with us' }</p>
                        <Button variant="contained" color="primary" onClick={ () => {
                            setShowLogin(false);
                        } }
                                className={ classes.button }>{ 'Sign Up' }</Button>
                    </div>
                </Grid>
            </Slide>
            : <div/> }
        <Slide direction='right' in={ showLogin }>
            <Grid key={ 0 } item>
                { <Login setShowLogin={ setShowLogin } notMedium={ notMedium }/> }
            </Grid>
        </Slide>
    </Grid>
};

const SignUpLayout = (props: { setShowLogin: any; notMedium: boolean; showLogin: boolean; }) => {

    const classes = useLoginSignupStyles();
    const { setShowLogin, showLogin, notMedium } = props;
    return <Grid container justify="center" className={ notMedium ? classes.rootContainer : "" } spacing={ 0 }>
        <Slide direction='left' in={ !showLogin }>
            <Grid key={ 0 } item>
                { <SignUp notMedium={ notMedium } setShowLogin={ setShowLogin }/> }
            </Grid>
        </Slide>
        { notMedium ? <Slide direction='left' in={ !showLogin }>
            <Grid key={ 1 } item>
                <div className={ classes.overlay }>
                    <h1>{ 'Welcome Back!' }</h1>
                    <p>{ 'To keep connected with us please login with your personal info' }</p>
                    <Button variant="contained" color="primary" onClick={ () => setShowLogin(true) }
                            className={ classes.button }>{ 'Sign In' }
                    </Button>
                </div>
            </Grid>
        </Slide> : <div/> }
    </Grid>;
};

export const AuthLayout = () => {
    const location = useLocation();
    const [ showLogin, setShowLogin ] = useState(( location?.state as { email: string, type: string } )?.type !== 'signup');
    const theme = useTheme();
    const notMedium = useMediaQuery(theme.breakpoints.up('md'));

    return showLogin ? <LoginLayout setShowLogin={ setShowLogin } notMedium={ notMedium } showLogin={ showLogin }/>
        : <SignUpLayout setShowLogin={ setShowLogin } notMedium={ notMedium } showLogin={ showLogin }/>;
};

