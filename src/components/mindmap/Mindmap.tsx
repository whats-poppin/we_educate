import React from 'react';
import mindmap from "../../assets/mind-map.svg"
import "./mindmap.css"

const Mindmap = () => {
    return (
        <div className = "mindmapRootContainer">
            <h1 className= "mindMapHeading">Basis of our products</h1>
            <div className="mindMapContainer">
                <img src={mindmap} alt="mindmap diagram"/>
            </div>
        </div>
    );
};

export default Mindmap;