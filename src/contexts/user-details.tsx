import React, { useContext, useEffect, useState } from "react";
import { Individual } from "../models/individual";
import { AuthContext } from "./auth";
import firebase from 'firebase';
import { getLoggedInUser } from "../controllers/auth-controller";

export const UserDetailsContext = React.createContext(null);

export const UserDetailsProvider: React.FC = ({ children }) => {
    const [ user, setUser ] = useState<Individual | undefined>(null);
    const { authStatus }: { authStatus: firebase.User } = useContext(AuthContext);

    useEffect(() => {
        if ( authStatus ) {
            ( async () => {
                const user = await getLoggedInUser(authStatus.uid);
                setUser(user as Individual)
            } )()
        }
    }, [ authStatus ]);

    return <UserDetailsContext.Provider value={ { user, setUser } }>{ children }</UserDetailsContext.Provider>
};