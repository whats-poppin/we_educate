import React, {useContext, useState} from 'react';
import brand_logo from "../../assets/brand_logo.png";
import Navbar from 'react-bootstrap/Navbar';
import {Form, FormControl, InputGroup, Nav,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import {BsSearch} from "react-icons/bs";
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../../contexts/auth";
import {signOut} from "../../controllers/auth-controller";

export const NavB = () => {
    const [showSearchBar, setShowSearchBar] = useState(false)
    const history = useHistory();
    const {user} = useContext(AuthContext);
    const tabs = ['explore', 'my-courses', 'auth'];

    return (
        <>
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
                        <Nav.Link key={tab} onClick={async () => {
                            if (user && tab === 'auth')
                                await signOut();
                            history.push(`/${tab}`);
                        }}>
                            {tab === 'auth' ? user
                                ? 'LOGOUT'
                                : 'LOGIN' : tab.toUpperCase().replaceAll('-', ' ')}
                        </Nav.Link>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};
