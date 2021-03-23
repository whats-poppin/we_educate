import React, { useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { signOut } from "../../controllers/auth-controller";
import { UserDetailsContext } from "../../contexts/user-details";
import { ProfileAvatar } from "../profile-avatar/profile-avatar";

export const ProfileDropdown: React.FC = () => {
    const history = useHistory();
    const [ showDropdown, setShowDropdown ] = useState(false);
    const { setUser } = useContext(UserDetailsContext);

    return <Dropdown show={ showDropdown }
                     navbar={ true }>
        <Dropdown.Toggle
            split={ false }
            style={ { height: 'min-content', background: "none", border: 'none' } }
            onClick={ () => setShowDropdown((prev) => !prev) }
        >
            <ProfileAvatar/>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="1" onClick={ () => {
                    history.push('/profile');
                } }>
                    PROFILE
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={ async () => {
                    await signOut();
                    setUser(null);
                    history.push('/');
                } }>
                    LOGOUT
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown.Toggle>
    </Dropdown>
};