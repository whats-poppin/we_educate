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
        return;
    }, [count]);

    const notSmall = useMediaQuery('(min-width:500px)');
    const history = useHistory();

    return (
        <div className="rootJumbo">
            <div className="container-grid">
                <div className="mainHeading">
                    We Educate
                </div>
                    <div className="subHeading">
                        <div>Enlightenment - The Purpose of Education</div>
                        <div>Transformation  - The Purpose of Management Education</div>
                    </div>
                {/*<p style={{marginTop: '2rem',*/}
                {/*    fontFamily: 'Montserrat, sans-serif',*/}
                {/*    fontSize: '2rem',*/}
                {/*}}>*/}
                {/*    {count ? (*/}
                {/*        <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>*/}
                {/*            <span> We Educate</span>*/}
                {/*            <Typist.Backspace count={10} delay={800} />*/}
                {/*            <span>A PDC Educational Services initiative</span>*/}
                {/*            <Typist.Backspace count={37} delay={800} />*/}
                {/*        </Typist>*/}
                {/*    ) : (*/}
                {/*        ""*/}
                {/*    )}*/}
                {/*</p>*/}

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
        </div>
    );
};

export default Jumbotron;
