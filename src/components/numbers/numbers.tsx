import React from 'react';
import "./numbers.css";

const Numbers = () => {
    return (
        <div
            style={{
                display:"flex",
                height: "100vh",
                width: "100vw",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <h3 className="iHeader" >
                "WE" offer services in
            </h3>
            <div className="container" >

                <div className="iCard">
                    <div className="num-style">1</div>
                    <h3 className="iTitle">Teaching</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">2</div>
                    <h3 className="iTitle">Training</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">3</div>
                    <h3 className="iTitle">Industry Research</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">4</div>
                    <h3 className="iTitle">Content Development</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">5</div>
                    <h3 className="iTitle">Case Writing</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">6</div>
                    <h3 className="iTitle">Pedagogy Innovations</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">7</div>
                    <h3 className="iTitle">Faculty Development</h3>
                </div>

                <div className="iCard">
                    <div className="num-style">8</div>
                    <h3 className="iTitle">Institution Building</h3>
                </div>

                <div className="iCard"
                    style={{
                        marginTop: "-50px"
                    }}
                >
                    <div className="num-style">9</div>
                    <h3 className="iTitle">Consulting</h3>
                </div>
            </div>
        </div>
    );
}

export default Numbers;
