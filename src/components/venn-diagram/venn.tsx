import React from 'react';
import {ReactComponent as VennDiagram} from "../../assets/venn_diagran.svg";
import "./venn.css";

const Venn = () => (
        <div className = "rootVennContainer">
            <div className="header">
                <h3>Basis of our products</h3>
                <p>Discover  -  Develop  -  Define</p>
                <p>
                    WE’s courses are built around the idea of joy of learning. <br/>
                    They help develop Curiosity, Critical Thinking, and Communication.
                </p>
            </div>

            <div className="venn-container">

                <div className="venn-content">
                    <h3>
                        <span>Our courses revolve around the </span>
                        concepts
                        <span> we believe are important for learning</span>
                    </h3>
                    <div className="p-container">
                        <p className="p1"> <span>The </span>do's <span>and</span> dont's</p>
                        <p className="p2"> <span>The</span>  spirit <span>of learning</span></p>
                        <p className="p3">Design <span>&</span>  thinking</p>
                        <p className="p4"> <span>The</span> magic <span>of learning</span></p>
                        <p className="p5"> <span>The</span> skill of <span> doing</span></p>
                    </div>
                </div>

                <div className="venn-diagram">
                    <VennDiagram height="90%" width="100%"/>
                </div>
            </div>
        </div>
)

export default Venn;
