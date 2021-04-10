import React, { useContext } from "react";
import { UserDetailsContext } from "../../contexts/user-details";
import { Individual } from "../../models/individual";
import { auth } from "../../firebase";
import { Organisation } from "../../models/organisation";
import { OrganisationDetailsContext } from "../../contexts/organisation-details";

export const ProfileAvatar = () => {
    const name = ( useContext(UserDetailsContext)?.user as Individual )?.name;
    const orgName = ( useContext(OrganisationDetailsContext).organisation as Organisation ).orgName;
    return <img
        src={ auth?.currentUser?.providerData[0].photoURL ?? `
        https://ui-avatars.com/api/?name=${ name ? name?.split(" ").join('+') :
            orgName?.split(" ").join('+') }&bold=true` }
        alt="DP"
        className="userImg" style={ { height: "3rem", width: "3rem" } }/>
};
