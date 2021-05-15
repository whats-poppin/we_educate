import React from 'react';
import {TextareaAutosize, TextField} from "@material-ui/core";
import {MdCall, MdEmail, MdLocationOn} from "react-icons/all";
import "./contact-us.css";

const ContactUs = () => {
    return (
        <>
            <h1 className="contact-us">Contact Us</h1>
            <div className="contactContainer">
                <div className="details-container">
                    <h3>Contact Info</h3>
                    <div className="details-content">
                        <div className="details-child">
                            <MdLocationOn className="details-icons"/>
                            <p className="details-description">123 ABCDedf Road, 123 ABC,
                                ABCD - 123456123 ABCDedf Road, 123 ABC,
                                ABCD - 123456
                            </p>
                        </div>
                        <div className="details-child">
                            <MdEmail className="details-icons"/>
                            <p className="details-description">ABCDedfRoad@ABCD.com</p>
                        </div>
                        <div className="details-child">
                            <MdCall className="details-icons"/>
                            <p className="details-description">123-456-789 </p>
                        </div>
                    </div>
                </div>

                <div className="form-container">
                    <h3>Send a Message</h3>
                    <div>
                        <form>
                            <TextField
                                className="formIn1"
                                id="standard-basic"
                                label="First Name"
                            />
                            <TextField
                                className="formIn2"
                                id="standard-basic"
                                label="Last Name"
                            />
                            <TextField
                                className="formIn3"
                                id="standard-basic"
                                label="Email Address"
                            />
                            <TextField
                                className="formIn4"
                                id="standard-basic"
                                label="Mobile Number"
                            />
                            <TextareaAutosize
                                className="textIn"
                                aria-label="minimum height"
                                rowsMin={3}
                                placeholder="Leave us a message"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
