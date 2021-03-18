import React from 'react';
import {Nav} from "react-bootstrap";
import './side-nav.css'

const SideNav = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Item className = "userImg-wrapper"> <img src="https://ui-avatars.com/api/?name=Mohan+Gautam" alt="DP" className="userImg"/></Nav.Item>
            <Nav.Item className = "userName">Mohan Gautam</Nav.Item>
            <Nav.Link className = "nav-links">Profile</Nav.Link>
            <Nav.Link className = "nav-links" >Account</Nav.Link>
            <Nav.Link className = "nav-links">Payment Methods</Nav.Link>
            <Nav.Link className = "nav-links">Privacy</Nav.Link>
            <Nav.Link className = "nav-links">Delete Account</Nav.Link>
        </Nav>
    );
};

export default SideNav;