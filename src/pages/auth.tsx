import React from "react";
import {NavB} from "../components/navbar/navbar";
import {AuthPage} from "../components/login-signup/login";

const auth = () =>
{
    return(
        <div>
            <NavB/>
            <AuthPage/>
        </div>
    )
}