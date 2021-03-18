import React from 'react';
import {ViewProfile} from '../components/view-profile/viewProfile'
import {NavB} from "../components/navbar/navbar";
import EditProfile from "../components/edit-profile/editProfile";

const Profile = () => {
    return (
        <>
            <NavB/>
            {/*<ViewProfile/>*/}
            <EditProfile/>
        </>
    )
};

export default Profile;