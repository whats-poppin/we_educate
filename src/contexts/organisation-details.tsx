import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth";
import firebase from 'firebase/app';
import { Organisation } from "../models/organisation";
import { fetchOrganisation } from "../controllers/organisation-controller";

export const OrganisationDetailsContext = React.createContext<{ organisation: Organisation | null, setOrganisation: React.Dispatch<React.SetStateAction<Organisation>> }>(null);

export const OrganisationDetailsProvider: React.FC = ({ children }) => {
    const [ organisation, setOrganisation ] = useState<Organisation>(null);
    const { authStatus }: { authStatus: firebase.User } = useContext(AuthContext);

    useEffect(() => {
        if ( authStatus ) {
            ( async () => {
                const organisation = await fetchOrganisation(authStatus.uid);
                setOrganisation(organisation as Organisation);
            } )()
        } else {
            setOrganisation(null);
        }
    }, [ authStatus ]);

    return <OrganisationDetailsContext.Provider
        value={ { organisation, setOrganisation } }>{ children }</OrganisationDetailsContext.Provider>
};
