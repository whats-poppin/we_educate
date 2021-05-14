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

const RenderBrand = ({ setIsTransparentNavbar, setExpanded }: { setIsTransparentNavbar: (show: boolean) => void, setExpanded: (show: boolean) => void }) => {
    const history = useHistory();
    return <>
        <Navbar.Brand onClick={ () => {
            window.scrollTo(0, 0);
            setIsTransparentNavbar(true);
            setExpanded(false);
            history.push('/');
        } }>
            <img src={ brand_logo } alt="logo" className="brand-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    </>;
};

const RenderLinks: React.FC<{ isTransparentNavbar?: boolean, setIsTransparentNavbar?: (transparent: boolean) => void }> = ({ isTransparentNavbar, setIsTransparentNavbar }) => {
    const history = useHistory();
    const { user } = useContext(UserDetailsContext);
    const { organisation } = useContext(OrganisationDetailsContext);
    return <>
        <Nav.Link eventKey='1' style={ isTransparentNavbar ? { color: 'white' } : {} }
                  onClick={ async () => {
                      history.push({
                          pathname: `/`,
                          state: { showExplore: true }
                      });
                      setIsTransparentNavbar && setIsTransparentNavbar(false);
                  } }>
            EXPLORE
        </Nav.Link>
        <Nav.Link eventKey='2' style={ isTransparentNavbar ? { color: 'white' } : {} }
                  onClick={ async () => {
                      history.push('/my-courses');
                      setIsTransparentNavbar && setIsTransparentNavbar(false);
                  } }>
            MY COURSES
        </Nav.Link>
        { !user && !organisation ?
            <Nav.Link eventKey='3' key={ 'auth' } style={ isTransparentNavbar ? { color: 'white' } : {} }
                      onClick={ async () => {
                          history.push(`auth`);
                          setIsTransparentNavbar && setIsTransparentNavbar(false);
                      } }>
                LOGIN
            </Nav.Link> : <ProfileDropdown/> }
    </>
};

export const NavB: React.FC = () => {
    const history = useHistory();
    const [ isTransparentNavbar, setIsTransparentNavbar ] = useState(true);
    const [ expanded, setExpanded ] = useState(false);

    const notMedium = useMediaQuery('(min-width:991px)');

    const changeColor = () => {
        if ( !expanded && window.pageYOffset === 0 && history.location.pathname === "/" )
            setIsTransparentNavbar(true);
        else
            setIsTransparentNavbar(false);
    }

    window.addEventListener('scroll', changeColor)

    useEffect(() => {
        history.location.pathname === '/' && window.pageYOffset === 0 && setIsTransparentNavbar(true);
    }, [ history.location.pathname ])


    return <Navbar bg="light" expand="lg" collapseOnSelect={ true } expanded={ expanded } onToggle={ (expanded) => {
        !notMedium && expanded ? setIsTransparentNavbar(false) : setIsTransparentNavbar(true)
        !notMedium && expanded ? setExpanded(true) : setExpanded(false)
    } } className={ !isTransparentNavbar ? 'navbar' : 'navbar-active' } fixed="top">
        <RenderBrand setExpanded={ setExpanded } setIsTransparentNavbar={ setIsTransparentNavbar }/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"/>
            { !notMedium ? <>
                <RenderLinks/>
                <Form inline>
                    <SearchField/>
                </Form> </> : <>
                <SearchBar isTransparentNavbar={ isTransparentNavbar }/>
                <RenderLinks isTransparentNavbar={ isTransparentNavbar }
                             setIsTransparentNavbar={ setIsTransparentNavbar }/>
            </> }
        </Navbar.Collapse>
    </Navbar>
};
