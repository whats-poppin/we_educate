import React from 'react';
import logo from '../../assets/brand_logo.png'
import {Button, Form, FormControl, InputGroup, Nav, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './Jumbotron.css';

const Jumbotron = () => {
    return (
        <>
            <div className = "container">
                <div className="item">
                    <h1 style={{fontSize: "3rem", fontWeight: 600}}>Committed to Excellence</h1>
                    <p>
                        Education is the essential thing for our life, and it
                        <br/>
                        helps in the growth of human civilisation.
                        <br/>
                        Education is necessary to understand the universe.
                    </p>
                </div>
                <img src={logo} alt="logo" id="logo"/>
            </div>
        </>
    );
};

export default Jumbotron;