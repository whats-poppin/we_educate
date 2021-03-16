import React, {useState} from 'react';
import brand_logo from "../../assets/brand_logo.png";
import Navbar from 'react-bootstrap/Navbar';
import {Button, Form, FormControl, InputGroup, Nav,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import {Component} from 'react';
import { BsSearch } from "react-icons/bs";

export const NavB = () => {
    const [showSearchBar, setShowSearchBar] = useState(false)

    return (
        <>
            <Navbar bg="light" expand="lg" id="mainNavbar" fixed="top">
                <Navbar.Brand>
                    <a href="/"><img src={brand_logo} alt="logo" className="brand_logo"/></a>
                </Navbar.Brand>
                {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Form inline>
                        <BsSearch className="search_button" onClick={()=>{
                            setShowSearchBar(!showSearchBar)
                        }}/>
                        {showSearchBar ? <div className="fade-in">
                            <InputGroup>
                                <FormControl
                                    placeholder="Press Enter to search"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                        </div>: <div/>}
                    </Form>
                    <Nav.Link href="#home">MY COURSES</Nav.Link>
                    <Nav.Link href="#home">EXPLORE</Nav.Link>
                    <Nav.Link href="/login">LOG IN</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};
