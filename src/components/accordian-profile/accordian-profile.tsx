import React from 'react';
import {Accordion, Nav} from "react-bootstrap";
import {Card} from "react-bootstrap";
import FormProfile from "../form-profile/form-profile";
import FormAccount from "../form-account/form-account";
import './accordian-profile.css'
import PaymentMethodsForm from "../payment-methods-form/payment-methods-form";
import PrivacyForm from "../privacy-form/privacy-form";
import DeleteAccountForm from "../delete-account-form/delete-account-form";

const AccordianProfile = () => {
    return (
        <>
            <Nav defaultActiveKey="/home" className="flex-column1">
                <Nav.Item className = "userImg-wrapper"> <img src="https://ui-avatars.com/api/?name=Mohan+Gautam" alt="DP" className="userImg"/></Nav.Item>
                <Nav.Item className = "userName">Mohan Gautam</Nav.Item>
                <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle eventKey="0">
                            <Nav.Link className = "nav-links">Profile</Nav.Link>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <FormProfile/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle eventKey="1">
                            <Nav.Link className = "nav-links">Account</Nav.Link>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <FormAccount/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle  eventKey="2">
                            <Nav.Link className = "nav-links">Payment Methods</Nav.Link>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <PaymentMethodsForm/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle eventKey="4">
                            <Nav.Link className = "nav-links">Privacy</Nav.Link>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <PrivacyForm/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle eventKey="5">
                            <Nav.Link className = "nav-links">Delete Account</Nav.Link>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <DeleteAccountForm/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Nav>
        </>
    );
};

export default AccordianProfile;