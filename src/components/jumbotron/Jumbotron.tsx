import React, {useState} from 'react';
import logo from '../../assets/brand_logo.png'
import {Button, FormControl, InputGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './Jumbotron.css';
import {AiOutlineArrowRight} from "react-icons/ai";
import {MdKeyboardArrowDown} from "react-icons/md";
import {useHistory} from 'react-router-dom';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Jumbotron = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const notSmall = useMediaQuery('(min-width:500px)');
    const validateEmail = () => {
        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");
        return (atPos < 1 || (dotPos - atPos < 2));
    }
    return (
        <>
            <div className="container-grid">
                <div className="item">
                    <h1>Committed to Excellence</h1>
                    <p style={{fontWeight: 600}}>
                        What is the purpose of Education?
                        Enlightenment.
                        <br/>
                        What is the purpose of Management Education?
                        <br/>
                        Transformation - to make individuals think differently.
                    </p>
                </div>
                <img src={logo} alt="logo" id="logo" />
            </div>
            <div className="container-flex"
                 style={notSmall ? {justifyContent: 'center'} : {justifyContent: 'flex-start', padding: '0rem 1rem'}}>
                <form>
                    <InputGroup>
                        <FormControl
                            placeholder="Enter your e-mail"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push({
                                            pathname: `/auth`,
                                            state: {email, type: 'signup'}
                                        });
                                    }}
                                    disabled={validateEmail()}
                                    variant="outline-secondary">
                                <AiOutlineArrowRight/>
                            </Button>
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