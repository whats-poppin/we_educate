import React from 'react';
import {NavB} from "../components/navbar/navbar";
import NormalProfile from "../components/normal-profile/normal-profile";
import AccordianProfile from "../components/accordian-profile/accordian-profile";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const Profile = () => {
    const notSmall = useMediaQuery('(min-width:775px)');
    return (
        <>
            <NavB/>
            {!notSmall ? <AccordianProfile/> : <NormalProfile/>}
        </>
    )
};