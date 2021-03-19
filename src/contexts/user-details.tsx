import React, {useState} from "react";
import {Individual} from "../models/individual";

export const UserDetailsContext = React.createContext(null);

export const UserDetailsProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<Individual | undefined>(null);

    return <UserDetailsContext.Provider value={{user, setUser}}>{children}</UserDetailsContext.Provider>
};