import React from 'react';
import {Carousel} from "react-bootstrap";
// import books1 from "../../assets/books1.jpg";
// import books2 from "../../assets/books2.jpg";
// import books3 from "../../assets/books3.jpg";
// import books4 from "../../assets/books4.jpg";
import "./we-carousel.css";

const WeCarousel = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item className="carousel-item1">
                    <div className="carousel-content">
                        <p>We Educate is a culmination of more than 100 years of combined experience of three generations of academicians in the fields of Liberal Arts and Management. It is a PDC Educational Services initiative.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item2">
                    <div className="carousel-content">
                        <p>We educate offers services in Teaching, Training, Industry Research, Consulting, Content Development, Case Writing, Pedagogy Innovations, Faculty Development, and Institution Building.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item3">
                    <div className="carousel-content">
                        <p>WE’s programs are based on six I’s: Inquiry, Information, Inspire, Innovate, Implementation, and Impact</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item4">
                    <div className="carousel-content">
                        <p>WE’s courses are built around the idea of Joy of Learning – Concepts – Do’s & Don’ts; Spirit of Learning – Design – Thinking; and Magic of Learning – Skill – Doing. They drive the participants to Discover ----- Define ----- Develop. They help develop Curiosity, Critical Thinking, and Communication.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default WeCarousel;