import React, {useState} from 'react';
import './editProfile.css'
import {Nav} from "react-bootstrap";
import FormProfile from "../form-profile/form-profile";
import FormAccount from "../form-account/form-account";
import PaymentMethodsForm from "../payment-methods-form/payment-methods-form";
import PrivacyForm from "../privacy-form/privacy-form";
import DeleteAccountForm from "../delete-account-form/delete-account-form";


const EditProfile = () => {
    const [selectedComponent, setSelectedComponent] = useState("profile")
    return (
        <div className="rootContainer">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Item className="userImg-wrapper"> <img src="https://ui-avatars.com/api/?name=Mohan+Gautam" alt="DP"
                                                            className="userImg"/></Nav.Item>
                <Nav.Item className="userName">Mohan Gautam</Nav.Item>
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
                {selectedComponent === "profile" ? <FormProfile/> :
                    selectedComponent === "account" ? <FormAccount/> :
                        selectedComponent === "paymentMethods" ? <PaymentMethodsForm/> :
                            selectedComponent === "privacy" ? <PrivacyForm/> : <DeleteAccountForm/>}
            </div>
        </div>
    );
};

export default EditProfile;