import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./utils/theme";
import {Explore} from "./pages/explore";
import {Course} from "./pages/course";
import {AuthProvider} from "./contexts/auth";
import {PrivateRoutes} from "./components/private-routes/private-routes";
import {ErrorBoundary} from "./utils/error-boundary";
import {SnackbarToggleProvider} from './contexts/snackbar-toggle';

// Update the doc without using dot notation.
// firestore.collection("users").doc("frank").update({
//     favorites: {
//         food: "Ice Cream"
//     }
// }).then(function() {
//     console.log("Frank food updated");
// });


const App = () => {
    return <ErrorBoundary>
        <ThemeProvider theme={theme}>
            <SnackbarToggleProvider>
                <AuthProvider>
                    <Router>
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/explore" component={Explore} exact/>
                            <Route path={"/course"} component={Course} exact/>
                            <PrivateRoutes/>
                        </Switch>
                    </Router>
                </AuthProvider>
            </SnackbarToggleProvider>
        </ThemeProvider>
    </ErrorBoundary>
};

export default App;
