import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./utils/theme";
import { AuthProvider } from "./contexts/auth";
import { ErrorBoundary } from "./utils/error-boundary";
import { SnackbarToggleProvider } from './contexts/snackbar-toggle';
import { NavB } from "./components/navbar/navbar";
import { UserDetailsProvider } from "./contexts/user-details";
import { Routes } from "./components/private-routes/routes";
import { AllCoursesProvider } from "./contexts/all-courses";

const App = () => {
    return <ErrorBoundary>
        <ThemeProvider theme={ theme }>
            <SnackbarToggleProvider>
                <AuthProvider>
                    <UserDetailsProvider>
                        <AllCoursesProvider>
                            <Router>
                                <NavB/>
                                <Switch>
                                    <Routes/>
                                </Switch>
                            </Router>
                        </AllCoursesProvider>
                    </UserDetailsProvider>
                </AuthProvider>
            </SnackbarToggleProvider>
        </ThemeProvider>
    </ErrorBoundary>
};

export default App;
