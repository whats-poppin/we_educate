import React from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Footer from "../components/footer/footer";
import WeCarousel from "../components/carousel/we-carousel"

const Home = () => {
    return (
        <>
            <div className="home-body">
                <Jumbotron/>
                <WeCarousel/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;
