import React, {useEffect, useState} from 'react';
import brand_logo from "../../assets/brand_logo.png";
import Navbar from 'react-bootstrap/Navbar';
import {Form, FormControl, InputGroup, Nav,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import {BsSearch} from "react-icons/bs";
import {useHistory} from 'react-router-dom';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {theme} from "../../utils/theme";

export const NavB = () => {
    const notMedium = useMediaQuery(theme.breakpoints.up('md'));
    const [showSearchBar, setShowSearchBar] = useState(false)
    const history = useHistory()
    const [selectedTab, setSelectedTab] = useState('')
    const tabs = ['explore', 'my-courses', 'log-in'];

    useEffect(() => {
        setSelectedTab(window.location.pathname.slice(1));
    }, []);

    console.log(selectedTab);

    return !notMedium ? <><Navbar bg="light" expand="lg" id="mainNavbar" fixed="top">
        <Navbar.Brand onClick={() => {
            history.push('/')
        }}>
            <img src={brand_logo} alt="logo" className="brand_logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            {tabs.map((tab) =>
                <Nav.Link onClick={() => {
                    history.push(`/${tab}`);
                }}>
                    {tab.toUpperCase().replaceAll('-', ' ')}
                </Nav.Link>
            )}
            <Form inline>
                <InputGroup style = {{width: "100%", margin : "0 0.2rem"}}>
                    <FormControl
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
            </Form>
        </Navbar.Collapse>
    </Navbar></> : <>
        <Navbar bg="light" expand="lg" id="mainNavbar" fixed="top">
            <Navbar.Brand onClick={() => {
                history.push('/')
            }}>
                <img src={brand_logo} alt="logo" className="brand_logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <BsSearch className="search_button" onClick={() => {
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
                    </div> : <div/>}
                </Form>
                {tabs.map((tab) =>
                    <Nav.Link onClick={() => {
                        history.push(`/${tab}`);
                    }}>
                        {tab.toUpperCase().replaceAll('-', ' ')}
                    </Nav.Link>
                )}
            </Navbar.Collapse>
        </Navbar>
    </>
};
