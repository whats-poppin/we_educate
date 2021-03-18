import React from 'react';
import {NavB} from "../components/navbar/navbar";
import EditProfile from "../components/edit-profile/editProfile";
import AccordianProfile from "../components/accordian-profile/accordian-profile";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Profile = () => {
    const notSmall = useMediaQuery('(min-width:775px)');
    return (
        <>
            <NavB/>
            {!notSmall ? <AccordianProfile/> : <EditProfile/>}
        </>
    )
};

export default Profile;