import React, { useEffect, useState } from "react";
import firebase from 'firebase/app';
import { auth } from "../firebase";

export const AuthContext = React.createContext(null);

export const AuthProvider: React.FC = ({ children }) => {
    const [ authStatus, setAuthStatus ] = useState<firebase.User | undefined>(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth: firebase.User) => {
            setAuthStatus(userAuth);
        });
    }, []);

    return <AuthContext.Provider value={ { authStatus, setAuthStatus } }>{ children }</AuthContext.Provider>

};