import React, {useEffect, useState} from 'react';
import logo from '../../assets/brand_logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import './Jumbotron.css';
import {MdKeyboardArrowDown} from "react-icons/md";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// @ts-ignore
import Typist from 'react-typist';
import {useHistory} from "react-router-dom";

const Jumbotron = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setCount(1);
    }, [count]);
    const notSmall = useMediaQuery('(min-width:500px)');
    const history = useHistory();

    return (
        <>
            <div className="container-grid">
                <img src={logo} alt="logo" id="logo" />
                <p style={{marginTop: '2rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '2rem',
                }}>
                    {count ? (
                        <Typist avgTypingDelay={800} onTypingDone={() => setCount(0)}>
                            <span> We Educate</span>
                            <Typist.Backspace count={10} delay={800} />
                            <span> Committed to Excellence</span>
                            <Typist.Backspace count={23} delay={800} />
                        </Typist>
                    ) : (
                        ""
                    )}
                </p>

            </div>
            <div className="container-flex"
                 style={notSmall ? {justifyContent: 'center'} : {justifyContent: 'flex-start', padding: '0rem 1rem'}}>
                <div className="arrow-link">
                    <div className="arrows"
                         onClick={ async () => history.push({
                             pathname: `/`,
                             state: { showCarousel: true }
                         }) }
                    >
                        <MdKeyboardArrowDown className="arrow"/>
                        <MdKeyboardArrowDown className="arrow"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jumbotron;
