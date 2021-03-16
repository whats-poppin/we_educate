import React from 'react';
import logo from '../../assets/brand_logo.png'
import {Button, FormControl, InputGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './Jumbotron.css';
import {AiOutlineArrowRight} from "react-icons/ai";
import {MdKeyboardArrowDown} from "react-icons/md";

const Jumbotron = () => {
    return (
        <>
            <div className="container-grid">
                <div className="item">
                    <h1>Committed to Excellence</h1>
                    <p style={{fontWeight: 600}}>
                        Education is the essential thing for our life, and it
                        <br/>
                        helps in the growth of human civilisation.
                        <br/>
                        Education is necessary to understand the universe.
                    </p>
                </div>
                <img src={logo} alt="logo" id="logo"/>
            </div>
            <div className="container-flex">
                <form>
                    <InputGroup>
                        <FormControl
                            placeholder="Enter your e-mail"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button type="submit" onClick={(e) => {
                                e.preventDefault();
                            }} variant="outline-secondary"><AiOutlineArrowRight/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
                <div className="arrow-link">
                    <div className="arrows">
                        <MdKeyboardArrowDown className="arrow"/>
                        <MdKeyboardArrowDown className="arrow"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jumbotron;