import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./utils/theme";
import {Explore} from "./pages/explore";
import {Course} from "./pages/course";
import {Auth} from "./pages/auth";
import {AuthProvider} from "./contexts/auth";
import {PrivateRoutes} from "./components/private-routes/private-routes";
import {ErrorBoundary} from "./utils/error-boundary";
//Add Data

// firestore.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
//
// //Read Data
//
// firestore.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

// Create our initial doc
// firestore.collection("users").doc("frank").set({
//     name: "Frank",
//     favorites: {
//         food: "Pizza",
//         color: "Blue",
//         subject: "Recess"
//     },
//     age: 12
// }).then(function() {
//     console.log("Frank created");
// });

// Update the doc without using dot notation.
// Notice the map value for favorites.
// firestore.collection("users").doc("frank").update({
//     favorites: {
//         food: "Ice Cream"
//     }
// }).then(function() {
//     console.log("Frank food updated");
// });

/*
Ending State, favorite.color and favorite.subject are no longer present:
/users
    /frank
        {
            name: "Frank",
            favorites: {
                food: "Ice Cream",
            },
            age: 12
        }
 */


const App = () => {
    return <ErrorBoundary>
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/log-in" component={Auth} exact/>
                        <Route path="/explore" component={Explore} exact/>
                        <Route path={"/course"} component={Course} exact/>
                        <PrivateRoutes/>
                    </Switch>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    </ErrorBoundary>
};

export default App;
