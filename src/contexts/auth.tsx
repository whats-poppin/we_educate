import React, {useEffect, useState} from "react";
import {auth} from "../firebase";

export const AuthContext = React.createContext(null);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            auth.onAuthStateChanged(async (userAuth: any) => {
                setUser(userAuth);
            });
        })()
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
    );
};