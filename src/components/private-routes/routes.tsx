import { Redirect, Route, Switch } from "react-router-dom";
import React, { useContext } from "react";
import { MyCourses } from "../../pages/my-courses";
import { Profile } from "../../pages/profile";
import { AuthLayout } from "../auth-layout/auth-layout";
import { UserDetailsContext } from "../../contexts/user-details";
import Home from "../../pages/home";
import { Course } from "../../pages/course";
import { About } from "../../pages/about";
import { TnC } from "../../pages/tnc";

export const Routes = () => {
    const { user } = useContext(UserDetailsContext);
    return <Switch>
        <Route path="/" component={ Home } exact/>
        <Route path={ "/course" } component={ Course } exact/>
        <Route path={ "/about" } component={ About } exact/>
        <Route path={ "/t&c" } component={ TnC } exact/>
        <Route path="/auth" render={ () =>
            !user ? <AuthLayout/> : <Redirect to='/'/> } exact/>
        <Route path={ "/my-courses" } render={ () =>
            !user ? <Redirect to='/auth'/> : <MyCourses/> } exact/>
        <Route path={ "/profile" } render={ () =>
            !user ? <Redirect to='/auth'/> : <Profile/> } exact/>
        <Route component={ Home }/>
    </Switch>
};