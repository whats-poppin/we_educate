import { useLoginSignupStyles } from "../../utils/component-styles/login-signup";
import { useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import { BsFillPersonFill, FaFacebookF, FaGoogle, VscOrganization } from "react-icons/all";
import { Button, Checkbox, CircularProgress, Slide, TextField, Typography } from "@material-ui/core";
import { signup, socialAuth } from "../../controllers/auth-controller";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";
import { Individual } from "../../models/individual";
import { Organisation } from "../../models/organisation";
import { UserDetailsContext } from "../../contexts/user-details";
import { OrganisationDetailsContext } from "../../contexts/organisation-details";

export const SocialAuth = ({ checkResult, showOrganisation }: { showOrganisation: boolean, checkResult: (result: Individual | string) => void }) => {
    const classes = useLoginSignupStyles();
    return <Slide direction='right' in={ !showOrganisation }>
        <div className={ classes.socialContainer }>
            <div
                onClick={ async () => {
                    const result = await socialAuth('facebook');
                    checkResult(result);
                } } className={ classes.social }>
                <FaFacebookF/>
            </div>
            <div
                onClick={ async () => {
                    const result = await socialAuth('google');
                    checkResult(result);
                } } className={ classes.social }>
                <FaGoogle/>
            </div>
        </div>
    </Slide>;
}

export const SignUp = (props: { setShowLogin: any; notMedium: boolean }) => {
    const classes = useLoginSignupStyles();
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const { setUser } = useContext(UserDetailsContext);
    const { setOrganisation } = useContext(OrganisationDetailsContext);
    const [ loading, setLoading ] = useState(false);
    const { notMedium, setShowLogin } = props;
    const location = useLocation();

    const [ showOrganisation, setShowOrganisation ] = useState(false);
    const [ address, setAddress ] = useState("");
    const [ email, setEmail ] = useState(( location.state as { email: string, type: string } )?.email ?? "");
    const [ name, setName ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ password, setPassword ] = useState("");

    const validateEmail = () => {
        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");
        return ( atPos < 1 || ( dotPos - atPos < 2 ) );
    };

    const checkResult = (result: Individual | Organisation | string) => {
        if ( typeof result !== 'string' ) {
            setSnackbarDefinition({
                severity: 'success',
                message: 'Signup successful!',
                visible: true
            });
            showOrganisation ? setOrganisation(result as Organisation) : setUser(result as Individual);
        } else
            setSnackbarDefinition({
                severity: 'error',
                message: result,
                visible: true
            });
    };

    return <form className={ classes.form } noValidate autoComplete="off"
                 style={ notMedium ? {} : { marginTop: '5rem' } }>
        <h1 className={ classes.h1 }>Create Account</h1>
        { showOrganisation ? null : <>
            <SocialAuth checkResult={ checkResult } showOrganisation={ showOrganisation }/>
            <span style={ { paddingTop: 10 } }>or use your email</span>
        </> }
        <TextField className={ classes.input } id="outlined-basic"
                   margin={ "normal" }
                   label={ showOrganisation ? "Organisation Name" : "Name" }
                   onChange={ (e) => setName(e.target.value) }
                   value={ name }
                   type={ 'text' }
                   variant="outlined"/>
        { showOrganisation ? <Slide direction='left' in={ showOrganisation }>
            <TextField className={ classes.input } id="outlined-basic"
                       margin={ "normal" }
                       label="Address"
                       onChange={ (e) => setAddress(e.target.value) }
                       value={ address }
                       type={ 'text' }
                       variant="outlined"/>

        </Slide> : null }
        <TextField className={ classes.input } id="outlined-basic"
                   margin={ "normal" }
                   label="Email"
                   onChange={ (e) => setEmail(e.target.value) }
                   value={ email }
                   type={ 'email' }
                   variant="outlined"/>
        <TextField className={ classes.input }
                   id="outlined-basic"
                   margin={ "normal" }
                   label="Password"
                   value={ password }
                   onChange={ (e) => setPassword(e.target.value) }
                   type={ 'password' }
                   variant="outlined"/>
        <TextField className={ classes.input }
                   id="outlined-basic"
                   margin={ "normal" }
                   label="Confirm Password"
                   helperText={ '*Length should be greater than 7' }
                   value={ confirmPassword }
                   onChange={ (e) => setConfirmPassword(e.target.value) }
                   type={ 'password' }
                   variant="outlined"/>
        <Button variant="contained"
                disabled={ !( !validateEmail() && password.length >= 8 && confirmPassword === password && name.length >= 1 ) }
                color="primary"
                onClick={ async (event) => {
                    setLoading(true);
                    const result = showOrganisation ?
                        await signup(event, email, password, name, address, true) :
                        await signup(event, email, password, name);
                    setLoading(false);
                    checkResult(result);
                } } className={ classes.button }>
            { !loading ? 'Sign Up' : <CircularProgress/> }
        </Button>
        {
            notMedium ? ""
                : <div>
                    <span style={ { paddingTop: 20 } }>or</span>
                    <br/>
                    <Button variant="contained" color="primary" onClick={ () => {
                        setShowLogin(true)
                    } }
                            className={ classes.button }>{ 'Sign In Instead' }</Button>
                </div>
        }
        <Typography style={ { cursor: 'pointer' } } onClick={ () => {
            setShowOrganisation((prev) => !prev)
        } }>
            Or register as an { !showOrganisation ? "Organisation" : "Individual" }
            <Checkbox icon={ <VscOrganization/> } checked={ showOrganisation }
                      onChange={ () => {
                      } } checkedIcon={ <BsFillPersonFill/> } name="check-org"/>
        </Typography>
    </form>
};
