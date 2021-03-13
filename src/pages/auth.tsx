import React from "react";
import {Navbar} from "../components/navbar/navbar";
import {AuthPage} from "../components/login-signup/login";

const auth = () => {
    return(
        <div>
            <Navbar/>
            <AuthPage/>

        </div>
    )
}