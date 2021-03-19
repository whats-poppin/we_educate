import React, {useContext} from 'react';
import {Accordion, Card, Nav} from "react-bootstrap";
import EditProfile from "../edit-profile/edit-profile";
import AccountDetails from "../account-details/account-details";
import './accordian-profile.css'
import PaymentHistory from "../payment-history/payment-history";
import PrivacyDetails from "../privacy-details/privacy-details";
import DeleteAccount from "../delete-account/delete-account";
import {AuthContext} from "../../contexts/auth";
import {Individual} from "../../models/individual";

const AccordianProfile = () => {
    const name = (useContext(AuthContext).user as Individual).name;
    return (
        <>
            <Nav defaultActiveKey="/home" className="flex-column1">
                <Nav.Item className="userImg-wrapper"> <img
                    src={`https://ui-avatars.com/api/?name=${name?.split(" ").join('+')}`} alt="DP"
                    className="userImg"/></Nav.Item>
                <Nav.Item className="userName">{name}</Nav.Item>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle eventKey="0">
                                <Nav.Link className="nav-links">Profile</Nav.Link>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <EditProfile/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle eventKey="1">
                                <Nav.Link className="nav-links">Account</Nav.Link>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <AccountDetails/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle eventKey="2">
                                <Nav.Link className="nav-links">Payment Methods</Nav.Link>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <PaymentHistory/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle eventKey="4">
                                <Nav.Link className="nav-links">Privacy</Nav.Link>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <PrivacyDetails/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle eventKey="5">
                                <Nav.Link className="nav-links">Delete Account</Nav.Link>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                <DeleteAccount/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Nav>
        </>
    );
};

export default AccordianProfile;