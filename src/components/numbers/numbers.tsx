import React from 'react';
import "./numbers.css";

const Numbers = () => {
    return (
        <div
            style={{
                display:"flex",
                height: "100vh",
                width: "100vw",
                alignItems: "space-between",
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}
        >
            <h3 className="iHeader" >
                The basis of our products are
            </h3>
            <div className="container" >

                <div className="iCard">
                    <div className="num-style">1</div>
                    <h3 className="iTitle">Inquiry</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">2</div>
                    <h3 className="iTitle">Information</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">3</div>
                    <h3 className="iTitle">Inspire</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">4</div>
                    <h3 className="iTitle">Innovate</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">5</div>
                    <h3 className="iTitle">Implementation</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">6</div>
                    <h3 className="iTitle">Impact</h3>
                </div>
            </div>
        </div>
    );
}

export default Numbers;
