import React from 'react'
import  './viewProfile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col, Button} from "react-bootstrap";
import { HiPencil } from "react-icons/hi";

export const ViewProfile = () => {
    return (
        <div className="rootContainer">
            <section className="profile_container">
                <div className="profile_img_section">
                    <img className="profile_img-LG"
                         src="https://images.unsplash.com/photo-1615851943632-ffb942c2fceb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfH
               Rvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="DP"/>
                </div>
                <div className="profile_desc_section">
                    <h2>Tejas S Hirawat</h2>
                    <h3>Student</h3>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" readOnly/>
                            </Form.Group>

                            {/*<Form.Group as={Col} controlId="formGridPassword">*/}
                            {/*  <Form.Label>Password</Form.Label>*/}
                            {/*  <Form.Control type="password" placeholder="Password" />*/}
                            {/*</Form.Group>*/}
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Detail 1</Form.Label>
                            <Form.Control placeholder="Detail 1" readOnly/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Detail 2</Form.Label>
                            <Form.Control placeholder="Detail 2" readOnly/>
                        </Form.Group>
                        {/*<Form.Group id="formGridCheckbox">*/}
                        {/*  <Form.Check type="checkbox" label="Check me out" />*/}
                        {/*</Form.Group>*/}

                        <Button variant="secondary" >
                            <HiPencil/>
                        </Button>
                    </Form>
                </div>
            </section>
        </div>
    )
}

// export default viewProfile;

