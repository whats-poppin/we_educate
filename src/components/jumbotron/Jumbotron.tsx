import React from 'react';
import logo from '../../assets/brand_logo.png'
import {Button, Form, FormControl, InputGroup, Nav, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './Jumbotron.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Jumbotron = () => {
    return (
        <>
            <div className = "container-grid">
                <div className="item">
                    <h1 style={{fontSize: "3rem", fontWeight: 700}}>Committed to Excellence</h1>
                    <p style={{fontWeight:600}}>
                        Education is the essential thing for our life, and it
                        <br/>
                        helps in the growth of human civilisation.
                        <br/>
                        Education is necessary to understand the universe.
                    </p>
                </div>
                <img src={logo} alt="logo" id="logo"/>
            </div>
            <div className="container-flex">
                <InputGroup>
                    <FormControl
                        placeholder="Enter your e-mail"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <a href="/login">
                            <Button type="submit" variant="outline-secondary"><AiOutlineArrowRight/></Button>
                        </a>
                    </InputGroup.Append>
                </InputGroup>
                <a href="#" className="arrow-link">
                    <div className="arrows">
                        <MdKeyboardArrowDown className="arrow"/>
                        <MdKeyboardArrowDown className="arrow"/>
                    </div>
                </a>
            </div>
        </>
    );
};

export default Jumbotron;