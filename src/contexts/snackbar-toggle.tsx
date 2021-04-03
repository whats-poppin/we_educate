import React, { createContext, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

export const SnackbarToggleContext = createContext(null);

export const SnackbarToggleProvider: React.FC = ({ children }) => {
    const [ snackBarDefinition, setSnackbarDefinition ] = useState<{ visible: boolean, severity: string, message: string }>({
        visible: false,
        severity: 'error',
        message: ""
    });
    const handleClose = (event: any, reason?: string) => {
        if ( reason === 'clickaway' ) {
            return;
        }
        setSnackbarDefinition({
            visible: false,
            severity: 'error',
            message: ""
        });
    };

    return <SnackbarToggleContext.Provider value={ { snackBarDefinition, setSnackbarDefinition } }>
        { children }
        <Snackbar open={ snackBarDefinition.visible } autoHideDuration={ 4000 } onClose={ handleClose }>
            <MuiAlert elevation={ 6 } variant="filled"
                      severity={ snackBarDefinition.severity === 'error' ? 'error' : 'success' }
                      onClose={ handleClose }>
                { snackBarDefinition.message }
            </MuiAlert>
        </Snackbar>
    </SnackbarToggleContext.Provider>
};