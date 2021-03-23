// import Swiper core and required modules
import SwiperCore, { Mousewheel,Scrollbar, A11y } from 'swiper';
import i1 from "../../assets/i1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([ Mousewheel,Scrollbar, A11y]);

const params = {
    mousewheel: {invert: false},
    spaceBetween:50,
    slidesPerView:1,
}

export const Carousel = () => {
    return (
        <>
            <div className="swiper-container">
                <img src={i1} alt=""/>
                <Swiper {...params}>
                    <SwiperSlide
                        style={{display: 'flex'}}>
                        <img src={i1} alt="Random slide"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};
