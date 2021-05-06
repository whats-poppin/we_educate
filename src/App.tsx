import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./utils/theme";
import { AuthProvider } from "./contexts/auth";
import { ErrorBoundary } from "./utils/error-boundary";
import { SnackbarToggleProvider } from './contexts/snackbar-toggle';
import { UserDetailsProvider } from "./contexts/user-details";
import { Routes } from "./components/private-routes/routes";
import { AllCoursesProvider } from "./contexts/all-courses";
import { OrganisationDetailsProvider } from './contexts/organisation-details';

export const loadScript = (src: string) => {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    });
};

export const __DEV__ = document.domain === 'localhost';

const App = () => {
    return <ErrorBoundary>
        <ThemeProvider theme={ theme }>
            <SnackbarToggleProvider>
                <AuthProvider>
                    <UserDetailsProvider>
                        <OrganisationDetailsProvider>
                            <AllCoursesProvider>
                                <Router>
                                    <Routes/>
                                </Router>
                            </AllCoursesProvider>
                        </OrganisationDetailsProvider>
                    </UserDetailsProvider>
                </AuthProvider>
            </SnackbarToggleProvider>
        </ThemeProvider>
    </ErrorBoundary>
};

export default App;
