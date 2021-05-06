import React, { useContext, useEffect, useState } from 'react';
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
import { OrganisationDetailsContext } from "../../contexts/organisation-details";

const RenderBrand = () => {
    const history = useHistory();
    return <>
        <Navbar.Brand onClick={ () => {
            window.scrollTo(0, 0)
            history.push('/')
        } }>
            <img src={ brand_logo } alt="logo" className="brand-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    </>;
};

const RenderLinks: React.FC<{ isTransparentNavbar: boolean }> = ({ isTransparentNavbar }) => {
    const history = useHistory();
    const { user } = useContext(UserDetailsContext);
    const { organisation } = useContext(OrganisationDetailsContext);
    return <>
        <Nav.Link style={ isTransparentNavbar ? { color: 'white' } : {} }
                  onClick={ async () => history.push({
                      pathname: `/`,
                      state: { showExplore: true }
                  }) }>
            EXPLORE
        </Nav.Link>
        <Nav.Link style={ isTransparentNavbar ? { color: 'white' } : {} } onClick={ async () => {
            history.push('/my-courses');
            console.log(history.location.pathname)
        } }>
            MY COURSES
        </Nav.Link>
        { !user && !organisation ?
            <Nav.Link key={ 'auth' } style={ isTransparentNavbar ? { color: 'white' } : {} } onClick={ async () => {
                history.push(`auth`);
            } }>
                LOGIN
            </Nav.Link> : <ProfileDropdown/> }
    </>
};

export const NavB: React.FC = () => {
    const history = useHistory();
    const [ isTransparentNavbar, setIsTransparentNavbar ] = useState(true);

    const changeColor = () => {
        if ( window.pageYOffset === 0 && history.location.pathname === "/" )
            setIsTransparentNavbar(true);
        else
            setIsTransparentNavbar(false);
    }

    window.addEventListener('scroll', changeColor)

    useEffect(() => {
        history.location.pathname !== '/' && setIsTransparentNavbar(false);
        history.location.pathname === '/' && window.pageYOffset === 0 && setIsTransparentNavbar(true);
    }, [ history.location.pathname ])

    const notMedium = useMediaQuery('(min-width:991px)');
    return <Navbar bg="light" expand="lg" className={ !isTransparentNavbar ? 'navbar' : 'navbar-active' } fixed="top">
        <RenderBrand/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"/>
            { !notMedium ? <>
                <RenderLinks isTransparentNavbar={ isTransparentNavbar }/>
                <Form inline>
                    <SearchField/>
                </Form> </> : <>
                <SearchBar isTransparentNavbar={ isTransparentNavbar }/>
                <RenderLinks isTransparentNavbar={ isTransparentNavbar }/>
            </> }
        </Navbar.Collapse>
    </Navbar>
};
