import { Redirect, Route } from "react-router-dom";
import React, { useContext } from "react";
import { MyCourses } from "../../pages/my-courses";
import { Profile } from "../../pages/profile";
import { AuthLayout } from "../auth-layout/auth-layout";
import { UserDetailsContext } from "../../contexts/user-details";

export const PrivateRoutes = () => {
    const { user } = useContext(UserDetailsContext);
    return <>
        <Route path="/auth" render={ () =>
            !user ? <AuthLayout/> : <Redirect to='/'/> } exact/>
        <Route path={ "/my-courses" } render={ () =>
            !user ? <Redirect to='/auth'/> : <MyCourses/> } exact/>
        <Route path={ "/profile" } render={ () =>
            !user ? <Redirect to='/auth'/> : <Profile/> } exact/>
        <Redirect to="/"/>
    </>
};