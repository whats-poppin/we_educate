import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../contexts/auth";
import {SnackbarToggleContext} from "../../contexts/snackbar-toggle";
import {FaFacebookF, FaGoogle} from "react-icons/all";
import {Button, TextField} from "@material-ui/core";
import {login} from "../../controllers/auth-controller";

export const Login = (props: { setShowLogin: any; notMedium: boolean; }) => {
    const classes = useLoginSignupStyles();
    const {setUser} = useContext(AuthContext);
    const {setSnackbarDefinition} = useContext(SnackbarToggleContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {notMedium, setShowLogin} = props;

    const validateEmail = () => {
        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");
        return (atPos < 1 || (dotPos - atPos < 2));
    }

    return <form className={classes.form} noValidate autoComplete="off" style={notMedium ? {} : {marginTop: '5rem'}}>
        <h1 className={classes.h1}>Sign In</h1>
        <div className={classes.socialContainer}>
            <div onClick={() => {
            }} className={classes.social}><FaFacebookF/></div>
            <div onClick={() => {
            }} className={classes.social}><FaGoogle/></div>
        </div>
        <span style={{paddingTop: 20}}>or use your account</span>
        <TextField
            className={classes.input}
            id="outlined-basic"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            margin={"normal"}
            label="Email"
            type='email'
            variant="outlined"/>
        <TextField
            className={classes.input}
            id="outlined-basic"
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            value={password}
            margin={"normal"}
            label="Password"
            type="password"
            variant="outlined"/>
        <div style={{paddingTop: 20, textDecoration: 'none', color: '#333333'}} onClick={() => {
        }}>
            Forgot your password?
        </div>
        <Button variant="contained" color="primary"
                disabled={!(!validateEmail() && password.length >= 8)}
                onClick={async (event) => {
                    const loginRes = await login(event, email, password);
                    if (typeof loginRes !== 'string')
                        setUser(loginRes)
                    else
                        setSnackbarDefinition({
                            visible: true,
                            severity: 'error',
                            message: loginRes as string
                        });
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