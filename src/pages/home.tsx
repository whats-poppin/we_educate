import React from "react";
import {NavB} from "../components/navbar/navbar";
import Jumbotron from "../components/jumbotron/Jumbotron";

const Home = () => {
    return (
        <>
            <NavB/>
            {/*<h1 style={{textAlign: "center", fontSize: "2.7rem", padding: "5rem"}}>WE EDUCATE HOSTED SUCCESSFULLY. DEV WORK STARTED</h1>*/}
            <Jumbotron/>
        </>
    )
}

export default Home;