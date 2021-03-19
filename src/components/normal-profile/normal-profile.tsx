import React, {useContext, useState} from 'react';
import './normal-profile.css'
import {Nav} from "react-bootstrap";
import EditProfile from "../edit-profile/edit-profile";
import AccountDetails from "../account-details/account-details";
import PaymentHistory from "../payment-history/payment-history";
import PrivacyDetails from "../privacy-details/privacy-details";
import DeleteAccount from "../delete-account/delete-account";
import {AuthContext} from "../../contexts/auth";
import {Individual} from "../../models/individual";


const NormalProfile = () => {
    const [selectedComponent, setSelectedComponent] = useState("profile")
    const {name} = useContext(AuthContext)?.user as Individual;
    return (
        <div className="rootContainer">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Item className="userImg-wrapper"> <img
                    src={`https://ui-avatars.com/api/?name=${name?.split(" ").join('+')}`} alt="DP"
                    className="userImg"/></Nav.Item>
                <Nav.Item className="userName">{name ?? ""}</Nav.Item>
                <Nav.Link className="nav-links" onClick={() => {
                    setSelectedComponent("profile")
                }}>Profile</Nav.Link>
                <Nav.Link className="nav-links" onClick={() => {
                    setSelectedComponent("account")
                }}>Account</Nav.Link>
                <Nav.Link className="nav-links" onClick={() => {
                    setSelectedComponent("paymentMethods")
                }}>Payment Methods</Nav.Link>
                <Nav.Link className="nav-links" onClick={() => {
                    setSelectedComponent("privacy")
                }}>Privacy</Nav.Link>
                <Nav.Link className="nav-links" onClick={() => {
                    setSelectedComponent("deleteAccount")
                }}>Delete Account</Nav.Link>
            </Nav>
            <div className="info">
                {selectedComponent === "profile" ? <EditProfile/> :
                    selectedComponent === "account" ? <AccountDetails/> :
                        selectedComponent === "paymentMethods" ? <PaymentHistory/> :
                            selectedComponent === "privacy" ? <PrivacyDetails/> : <DeleteAccount/>}
            </div>
        </div>
    );
};

export default NormalProfile;