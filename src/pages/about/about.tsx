import React from "react";
import pic from "../../assets/mukesh_chaturvedi.jpg"
import "./about.css";

export const About = () => {

    return (
        <>
            <div className="heading-panel">
                <h1 className="heading">
                    <span>W</span>HO <span>W</span>E <span>A</span>RE
                </h1>
            </div>
            <div className="about-container">

                <div className="image-container">
                    <img src={pic} alt="abhinav dad"/>
                </div>
                <div className="content">
                    <div className="heading">
                        <h3>
                            Dr. Mukesh Chaturvedi
                        </h3>
                    </div>
                    <p>
                        We Educate is headed by Dr. Mukesh Chaturvedi, the Founder Partner of PDC Educational Services.
                        Dr. Mukesh Chaturvedi has been with some of the leading institutions of the country, like XLRI Jamshedpur,
                        MDI Gurgaon, BITS Pilani, and IMT Ghaziabad, teaching, training, researching and consulting in the areas of
                        Marketing and Business Communication over the last 40 years.
                    </p>
                </div>
            </div>
    </>
    )
};
