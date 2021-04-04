import React from 'react';
import logo from '../../assets/brand_logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import './Jumbotron.css';
import {MdKeyboardArrowDown} from "react-icons/md";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Jumbotron = () => {
    const notSmall = useMediaQuery('(min-width:500px)');
    return (
        <>
            <div className="container-grid">
                {/*<div className="item">*/}
                {/*    <h1>Committed to Excellence</h1>*/}
                {/*    <p style={{fontWeight: 600}}>*/}
                {/*        What is the purpose of Education?*/}
                {/*        Enlightenment.*/}
                {/*        <br/>*/}
                {/*        What is the purpose of Management Education?*/}
                {/*        <br/>*/}
                {/*        Transformation - to make individuals think differently.*/}
                {/*    </p>*/}
                {/*</div>*/}
                <img src={logo} alt="logo" id="logo" />
            </div>
            <div className="container-flex"
                 style={notSmall ? {justifyContent: 'center'} : {justifyContent: 'flex-start', padding: '0rem 1rem'}}>
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