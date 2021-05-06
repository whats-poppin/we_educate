import React, { useContext, useState } from 'react';
import './normal-profile.css'
import { Nav } from "react-bootstrap";
import EditProfile from "../edit-profile/edit-profile";
import OrganisationDetails from "../organisation-details/organisation-details";
import PaymentHistory from "../payment-history/payment-history";
import DeleteAccount from "../delete-account/delete-account";
import { UserDetailsContext } from "../../contexts/user-details";
import { ProfileAvatar } from "../profile-avatar/profile-avatar";
import { OrganisationDetailsContext } from "../../contexts/organisation-details";
import { UpdateCourses } from "../update-courses/update-courses";


const NormalProfile = () => {
    const [ selectedComponent, setSelectedComponent ] = useState("profile");
    const { user } = useContext(UserDetailsContext);
    const { organisation } = useContext(OrganisationDetailsContext);

    return <div className="rootContainer">
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Item className="userImg-wrapper">
                <ProfileAvatar/>
            </Nav.Item>
            <Nav.Item className="userName">
                { user ? user.name : organisation.orgName }
            </Nav.Item>
            <Nav.Link className="nav-links" onClick={ () => {
                setSelectedComponent("profile")
            } }>
                Account Details
            </Nav.Link>
            { organisation || user?.email !== "admin101@we-educateall.com" ?
                < Nav.Link className="nav-links" onClick={ () => {
                    setSelectedComponent("organisation")
                } }>
                    Organisation Dashboard
                </Nav.Link> : < Nav.Link className="nav-links" onClick={ () => {
                    setSelectedComponent("updateCourses")
                } }>
                    Update Courses
                </Nav.Link> }
            <Nav.Link className="nav-links" onClick={ () => {
                setSelectedComponent("paymentHistory")
            } }>
                Payment History
            </Nav.Link>
            <Nav.Link className="nav-links" onClick={ () => {
                setSelectedComponent("deleteAccount")
            } }>
                Delete Account
            </Nav.Link>
        </Nav>
        <div className="info">
            { selectedComponent === "profile" ? <EditProfile/> :
                selectedComponent === "organisation" ? <OrganisationDetails/> :
                    selectedComponent === "paymentHistory" ? <PaymentHistory/> :
                        selectedComponent === "updateCourses" ? <UpdateCourses/> : <DeleteAccount/> }
        </div>
    </div>
};

export default NormalProfile;
