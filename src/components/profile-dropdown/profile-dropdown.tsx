import React, {useContext, useState} from "react";
import {Dropdown} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../contexts/auth";
import {Individual} from "../../models/individual";
import {signOut} from "../../controllers/auth-controller";

export const ProfileDropdown: React.FC = () => {
    const history = useHistory();
    const [showDropdown, setShowDropdown] = useState(false);
    const name = (useContext(AuthContext).user as Individual).name;

    return <Dropdown show={showDropdown}
                     navbar={true}>
        <Dropdown.Toggle
            split={false}
            style={{height: 'min-content', background: "none", border: 'none'}}
            onClick={() => setShowDropdown((prev) => !prev)}
        >
            <img
                src={`https://ui-avatars.com/api/?name=${name?.split(" ").join('+')}`} alt="DP"
                className="userImg"/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item eventKey="1" onClick={() => {
                history.push('/profile');
            }}>
                PROFILE
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={async () => {
                await signOut();
                history.push('/');
            }}>
                LOGOUT
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
};