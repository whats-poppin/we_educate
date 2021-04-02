import React from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Footer from "../components/footer/footer";
import WeCarousel from "../components/carousel/we-carousel"
import CourseFlipCard from "../components/course-flip-card/course-flip-card";

const Home = () => {
    return (
        <>
            <Jumbotron/>
            <WeCarousel/>
            <CourseFlipCard/>
            <Footer/>

        </>
    )
}

export default Home;
