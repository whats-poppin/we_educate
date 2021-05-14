import React from 'react';
import venn_diagram from "../../assets/venn_diagran.svg";
import "./venn.css"
import mind_map from "../../assets/mind-map.svg"

const Venn = () => {
    return (
        <div className = "rootVennContainer">
            <h1 className= "vennHeading">The six I pedagogy</h1>
            <div className="vennContainer">
                <p>
                    The six I pedagogy
                </p>
                <img src={venn_diagram} alt="venn diagram"/>
            </div>
        </div>
    );
}

export default Venn;
