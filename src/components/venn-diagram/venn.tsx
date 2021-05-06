import React from 'react';
import venn_diagram from "../../assets/venn_diagran.svg";

const Venn = () => {
    return (
        <div style={{
        height: "100vh"}
        }>
            <h3
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    fontWeight: "bolder",
                    textTransform: "uppercase",
                }}
            >
                Basis of our products
            </h3>
            <div
                style={{
                    width: "100vw",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <p
                    style={{
                        fontSize: "2rem",
                        width: "30%",
                        marginLeft: "9rem",
                        alignSelf: "center",
                        justifyContent: "center",
                        textAlign: "justify"
                    }}
                >
                    WE’s courses are built around the idea of Joy of Learning – Concepts – Do’s & Don’ts;
                    Spirit of Learning – Design – Thinking; and Magic of Learning – Skill – Doing.
                    They drive the participants to Discover
                    ----- Define ----- Develop.
                    They help develop Curiosity, Critical Thinking, and Communication.
                </p>
                <img
                    style={{
                        margin: "auto",
                        height: "39rem"
                    }}
                    src={venn_diagram}
                     alt="venn diagram"
                />
            </div>
        </div>
    );
}

export default Venn;
