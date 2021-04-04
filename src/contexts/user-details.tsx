import React, { useContext, useEffect, useState } from "react";
import { Individual } from "../models/individual";
import { AuthContext } from "./auth";
import firebase from 'firebase/app';
import { getLoggedInUser } from "../controllers/auth-controller";

export const UserDetailsContext = React.createContext<{ user: Individual | null, setUser: React.Dispatch<React.SetStateAction<Individual>> }>(null);

export const UserDetailsProvider: React.FC = ({ children }) => {
    const [ user, setUser ] = useState<Individual>(null);
    const { authStatus }: { authStatus: firebase.User } = useContext(AuthContext);

    useEffect(() => {
        if ( authStatus ) {
            ( async () => {
                const user = await getLoggedInUser(authStatus.uid);
                setUser(user as Individual)
            } )()
        } else {
            setUser(null);
        }
    }, [ authStatus ]);

    return <UserDetailsContext.Provider value={ { user, setUser } }>{ children }</UserDetailsContext.Provider>
};