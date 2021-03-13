import React from "react";
import {Navbar} from "../components/navbar/navbar";
import {LoginSignupForm} from "../components/login-signup/login";

const login = () => {
    return(
        <div>
            <Navbar/>
            <LoginSignupForm/>

        </div>
    )
}