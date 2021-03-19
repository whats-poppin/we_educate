import React, {useContext, useState} from 'react';
import './normal-profile.css'
import {Nav} from "react-bootstrap";
import EditProfile from "../edit-profile/edit-profile";
import OrganisationDetails from "../account-details/organisation-details";
import PaymentHistory from "../payment-history/payment-history";
import DeleteAccount from "../delete-account/delete-account";
import {Individual} from "../../models/individual";
import {UserDetailsContext} from "../../contexts/user-details";


const NormalProfile = () => {
    const [selectedComponent, setSelectedComponent] = useState("profile")
    const {name} = useContext(UserDetailsContext)?.user as Individual;
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
                    setSelectedComponent("organisation")
                }}>Your Organisation</Nav.Link>
                <Nav.Link className="nav-links" onClick={() => {
                    setSelectedComponent("paymentHistory")
                }}>Payment History</Nav.Link>
                <Nav.Link className="nav-links" onClick={() => {
                    setSelectedComponent("deleteAccount")
                }}>Delete Account</Nav.Link>
            </Nav>
            <div className="info">
                {selectedComponent === "profile" ? <EditProfile/> :
                    selectedComponent === "organisation" ? <OrganisationDetails/> :
                        selectedComponent === "paymentHistory" ? <PaymentHistory/> : <DeleteAccount/>}
            </div>
        </div>
    );
};

export default NormalProfile;