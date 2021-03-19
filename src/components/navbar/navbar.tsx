import React, {useContext} from 'react';
import brand_logo from "../../assets/brand_logo.png";
import Navbar from 'react-bootstrap/Navbar';
import {Form, Nav,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../../contexts/auth";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {theme} from "../../utils/theme";
import {ProfileDropdown} from "../profile-dropdown/profile-dropdown";
import {SearchBar, SearchField} from "../search-bar/search-bar";

const RenderBrand = () => {
    const history = useHistory();
    return <>
        <Navbar.Brand onClick={() => {
            history.push('/')
        }}>
            <img src={brand_logo} alt="logo" className="brand_logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    </>;
};

const RenderLinks: React.FC = () => {
    const tabs = ['explore', 'my-courses'];
    const history = useHistory();
    const {user} = useContext(AuthContext);

    return <>
        {tabs.map((tab) =>
            <Nav.Link key={tab} onClick={async () => {
                if ((user && tab !== 'auth') || !user)
                    history.push(`/${tab}`);
            }}>
                {tab.toUpperCase().replaceAll('-', ' ')}
            </Nav.Link>
        )}
        {!user ? <Nav.Link key={'auth'} onClick={async () => {
                history.push(`auth`);
            }}>
                LOGIN </Nav.Link> :
            <ProfileDropdown/>}
    </>
};

export const NavB: React.FC = () => {
    const notMedium = useMediaQuery(theme.breakpoints.up('md'));

    return !notMedium ? <>
        <Navbar bg="light" expand="lg" id="mainNavbar" fixed="top">
            <RenderBrand/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <RenderLinks/>
                <Form inline>
                    <SearchField/>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </> : <>
        <Navbar bg="light" expand="lg" id="mainNavbar" fixed="top">
            <RenderBrand/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <SearchBar/>
                <RenderLinks/>
            </Navbar.Collapse>
        </Navbar>
    </>
};
