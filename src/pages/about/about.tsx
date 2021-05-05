import React from "react";
import pic1 from "../../assets/mukesh_chaturvedi.jpg";
import pic2 from "../../assets/mukesh_chaturvedi2.jpg";
import pdc from "../../assets/pdc2.png"
import "./about.css";
import Footer from "../../components/footer/footer";

export const About = () => {

    return (
        <>
            <div className="heading-panel">
                <h1 className="heading">
                    <span>W</span>HO <span>W</span>E <span>A</span>RE
                </h1>
            </div>
            <div className="about-container1">

                <div className="image-container">
                    <img src={pic1} alt="Dr. Mukesh Chaturvedi"/>
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

            <div className="about-container2">
                <div className="content">
                    <p>
                        Dr. Chaturvedi has also been a Visiting Faculty to Neoma Business School, Rouen, France; IIM Ahmedabad; IIM
                        Ranchi; IIM Rohtak; IIM Kozhikode; IIFT Delhi; Shiv Nadar University, Dadri; Boston International College,
                        Nepal; et al.
                    </p>
                    <p>
                        Dr. Chaturvedi has a Ph.D. from BITS Pilani, and is an alumnus of the prestigious International Visitor
                        Program of USIA, Washington, D.C., USA. He is the recipient of MDI’s most coveted Award for Excellence in
                        Teaching.
                    </p>
                    <p>
                        Dr. Chaturvedi’s publications include 10 Books, 20 Study Materials, and more than 100 Papers, Cases,
                        Articles, Chapters, and Reviews.
                    </p>
                </div>
                <img src={pic2} alt="abhinav dad"/>
            </div>
            <div className="pdc-container">
                <img
                    src={pdc}
                    alt="pdc logo"
                    className="pdc-logo"
                />
            </div>
            <Footer/>
    </>
    )
};
