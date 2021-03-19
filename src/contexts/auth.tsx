import React, {useEffect, useState} from "react";
import {auth} from "../firebase";
import {Individual} from "../models/individual";
import firebase from 'firebase';
import {getLoggedInUser} from "../controllers/auth-controller";

export const AuthContext = React.createContext(null);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<Individual | undefined>(null);
    useEffect(() => {
        (async () => {
            auth.onAuthStateChanged(async (userAuth: firebase.User) => {
                if (userAuth) {
                    const user = await getLoggedInUser(userAuth.uid);
                    if (typeof user !== 'string')
                        setUser(user as Individual);
                    else
                        setUser(null);
                } else {
                    setUser(null);
                }

            });
        })();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
    );
};