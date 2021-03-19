import {Redirect, Route} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../../contexts/auth";
import {MyCourses} from "../../pages/my-courses";
import {Profile} from "../../pages/profile";
import {Auth} from "../../pages/auth";

export const PrivateRoutes = () => {
    const {user} = useContext(AuthContext);
    return <>
        <Route path="/auth" render={() =>
            !user ? <Auth/> : <Redirect to='/'/>} exact/>
        <Route path={"/my-courses"} render={() =>
            !user ? <Redirect to='/auth'/> : <MyCourses/>} exact/>
        <Route path={"/profile"} render={() =>
            !user ? <Redirect to='/auth'/> : <Profile/>} exact/>
    </>
};