import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useLoginSignupStyles} from "../../utils/component-styles/login-signup";

export const LoginSignupForm = () => {
    const classes = useLoginSignupStyles();
    return (
        <div className={classes.root}>
            <div className={classes.formContainer}>
        <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic"  margin={"normal"} label="Email" variant="outlined" />
            <TextField id="outlined-basic" margin={"normal"} label="Password" variant="outlined" />

        </form>
            </div>
        </div>
    );
}