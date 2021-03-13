import React, {useEffect, useState} from "react";
import {auth} from "../firebase";

export const AuthContext = React.createContext(null);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    );
};