import React, { useContext } from 'react';
import { Accordion, Card, Nav } from "react-bootstrap";
import EditProfile from "../edit-profile/edit-profile";
import OrganisationDetails from "../account-details/organisation-details";
import './accordian-profile.css'
import PaymentHistory from "../payment-history/payment-history";
import DeleteAccount from "../delete-account/delete-account";
import { UserDetailsContext } from "../../contexts/user-details";
import { ProfileAvatar } from "../profile-avatar/profile-avatar";
import { OrganisationDetailsContext } from "../../contexts/organisation-details";

const AccordionProfile = () => {
    const orgName = useContext(OrganisationDetailsContext)?.organisation?.orgName;
    const userName = useContext(UserDetailsContext)?.user?.name;

    return <>
        <Nav defaultActiveKey="/home" className="flex-column1">
            <Nav.Item className="userImg-wrapper">
                <ProfileAvatar/>
            </Nav.Item>
            <Nav.Item className="userName">{ userName ?? orgName }</Nav.Item>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle eventKey="0">
                            <Nav.Link className="nav-links">
                                Account Details
                            </Nav.Link>
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
                            <Nav.Link className="nav-links">
                                Organisation Dashboard
                            </Nav.Link>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <OrganisationDetails/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle eventKey="2">
                            <Nav.Link className="nav-links">
                                Payment History
                            </Nav.Link>
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
                        <Accordion.Toggle eventKey="5">
                            <Nav.Link className="nav-links">
                                Delete Account
                            </Nav.Link>
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
};

export default AccordionProfile;
