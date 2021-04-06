import React, { useContext } from "react";
import { UserDetailsContext } from "../../contexts/user-details";
import { Individual } from "../../models/individual";
import { auth } from "../../firebase";

export const ProfileAvatar = () => {
    const name = ( useContext(UserDetailsContext).user as Individual ).name;
    return <img
        src={ auth?.currentUser?.providerData[0].photoURL ?? `https://ui-avatars.com/api/?name=${ name?.split(" ").join('+') }&bold=true` }
        alt="DP"
        className="userImg" style={ { height: "3rem", width: "3rem" } }/>
};