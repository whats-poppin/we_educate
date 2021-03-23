import React from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Footer from "../components/footer/footer";
import {Carousel} from "../components/carousel/swiper"

const Home = () => {
    return <>
        <Jumbotron/>
        <Carousel/>
        <Footer/>
    </>
}

export default Home;