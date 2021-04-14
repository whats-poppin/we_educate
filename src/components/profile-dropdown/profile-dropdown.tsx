import React, { useContext, useState } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { signOut } from "../../controllers/auth-controller";
import { UserDetailsContext } from "../../contexts/user-details";
import { ProfileAvatar } from "../profile-avatar/profile-avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { OrganisationDetailsContext } from "../../contexts/organisation-details";

export const ProfileDropdown: React.FC = () => {
    const history = useHistory();
    const [ showDropdown, setShowDropdown ] = useState(false);
    const notMedium = useMediaQuery('(min-width:991px)');
    const { setUser } = useContext(UserDetailsContext);
    const { setOrganisation } = useContext(OrganisationDetailsContext);

    return notMedium ? <Dropdown show={ showDropdown }
                                 navbar={ true }>
        <Dropdown.Toggle
            split={ false }
            style={ { height: 'min-content', background: "none", border: 'none' } }
            onClick={ () => setShowDropdown((prev) => !prev) }
        >
            <ProfileAvatar/>
            <Dropdown.Menu style={ { top: '121%', left: '-70px' } }>
                <Dropdown.Item eventKey="1" onClick={ () => {
                    history.push('/profile');
                } }>
                    PROFILE
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={ async () => {
                    await signOut();
                    setUser(null);
                    setOrganisation(null);
                    history.push('/');
                } }>
                    LOGOUT
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown.Toggle>
    </Dropdown> : <>
        <Nav.Link eventKey="1" onClick={ () => {
            history.push('/profile');
        } }>
            PROFILE
        </Nav.Link>
        <Nav.Link eventKey="2" onClick={ async () => {
            await signOut();
            setUser(null);
            setOrganisation(null);
            history.push('/');
        } }>
            LOGOUT
        </Nav.Link>
    </>;
};
