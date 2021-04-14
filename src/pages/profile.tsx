import React from 'react';
import NormalProfile from "../components/normal-profile/normal-profile";
import AccordionProfile from "../components/accordian-profile/accordion-profile";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const Profile = () => {
    const notSmall = useMediaQuery('(min-width:775px)');
    return !notSmall ? <AccordionProfile/> : <NormalProfile/>
};
