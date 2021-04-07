import React, { useContext } from 'react';
import brand_logo from "../../assets/brand_logo.png";
import Navbar from 'react-bootstrap/Navbar';
import { Form, Nav, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import { useHistory } from 'react-router-dom';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ProfileDropdown } from "../profile-dropdown/profile-dropdown";
import { SearchBar, SearchField } from "../search-bar/search-bar";
import { UserDetailsContext } from "../../contexts/user-details";

const RenderBrand = () => {
    const history = useHistory();
    return <>
        <Navbar.Brand onClick={ () => {
            history.push('/')
        } }>
            <img src={ brand_logo } alt="logo" className="brand_logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    </>;
};

const RenderLinks: React.FC = () => {
    const history = useHistory();
    const { user } = useContext(UserDetailsContext);

    return <>
        <Nav.Link
            onClick={ async () => history.push({
            pathname: `/`,
            state: { showExplore: true } }) }
        >
            EXPLORE
        </Nav.Link>
        <Nav.Link onClick={ async () => history.push('/my-courses') }>
            MY COURSES
        </Nav.Link>
        { !user ? <Nav.Link key={ 'auth' } onClick={ async () => {
                history.push(`auth`);
            } }>
                LOGIN </Nav.Link> :
            <ProfileDropdown/> }
    </>
};

export const NavB: React.FC = () => {
    const notMedium = useMediaQuery('(min-width:991px)');
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
