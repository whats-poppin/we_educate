import React from 'react';
import "./numbers.css";

const Numbers = () => {
    const numbersContent = [
        {
            number: 1,
            text: 'Teaching'
        },
        {
            number: 2,
            text: 'Training'
        },
        {
            number: 3,
            text: 'Industry Research'
        },
        {
            number: 4,
            text: 'Content Development'
        },
        {
            number: 5,
            text: 'Case Writing'
        },
        {
            number: 6,
            text: 'Pedagogy Innovations'
        },
        {
            number: 7,
            text: 'Faculty Development'
        },
        {
            number: 8,
            text: 'Institution Building'
        },
        {
            number: 9,
            text: 'Consulting'
        },
    ]
    return (
        <div style={{background: "#e9ecef", height:"100%", padding: "1.5rem 0", width: "100%"}} className="numRootContainer">
            <div className="iHeader">
                <h1>Services offered</h1>
            </div>
            <div className="num-container">
                {
                    numbersContent.map( content =>
                        <div className="iCard" key = {content.number}>
                            <div className="iNum">{content.number}</div>
                            <div className="iTitle">{content.text}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Numbers;
