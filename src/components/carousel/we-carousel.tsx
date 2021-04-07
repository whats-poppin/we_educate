import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import books1 from "../../assets/books1.jpg";
import books2 from "../../assets/books2.jpg";
import books3 from "../../assets/books3.jpg";
import books4 from "../../assets/books4.jpg";
import "./we-carousel.css";


const WeCarousel = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    const [ index, setIndex ] = useState(0);
    const carouselContent = [ {
        img: books1,
        text: 'We Educate is a culmination of more than 100 years of combined experience of three\n' +
            '                                generations of academicians in the fields of Liberal Arts and Management. It is a PDC\n' +
            '                                Educational Services initiative.'
    },
        {
            img: books2,
            text: 'WE offers services in Teaching, Training, Industry Research, Consulting, Content Development,\n' +
                '                            Case Writing, Pedagogy Innovations, Faculty Development, and Institution Building',
        },
        {
            img: books3,
            text: 'WE’s programs are based on six I’s: Inquiry, Information, Inspire, Innovate, Implementation,\n' +
                '                            and Impact.',
        },
        {
            img: books4,
            text: 'WE’s courses are built around the idea of Joy of Learning – Concepts – Do’s & Don’ts; Spirit\n' +
                '                            of Learning – Design – Thinking; and Magic of Learning – Skill – Doing. They drive the\n' +
                '                            participants to Discover ----- Define ----- Develop. They help develop Curiosity, Critical\n' +
                '                            Thinking, and Communication.'
        } ];
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <div ref={ ref }>
            <Carousel activeIndex={ index }
                      onSelect={ handleSelect }
                      interval={ 5000 }
                      pause={ false }
                      controls={ false }
                      touch={ true }
            >
                { carouselContent.map((item, idx) => <Carousel.Item key={idx}>
                    <div className="car-wrap">
                        <img
                            className="d-block w-100"
                            src={ item.img }
                            alt={ `${ idx } slide` }
                        />
                        <p>{ item.text }</p>
                    </div>
                </Carousel.Item>) }
            </Carousel>
        </div>
    );
});

export default WeCarousel;
