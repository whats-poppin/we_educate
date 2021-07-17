import React, { useContext, useState } from 'react';
import { Product } from "../../models/product";
import { UserDetailsContext } from "../../contexts/user-details";
import { useHistory } from 'react-router-dom';
import ReactCardFlip from "react-card-flip";
import { Card } from 'react-bootstrap';
import { Button } from "@material-ui/core";
import "./course-card.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MdArrowForward, MdChevronRight } from "react-icons/all";

export const CourseCard: React.FC<{ course: Product }> = React.memo(({ course }) => {
    const { user } = useContext(UserDetailsContext);
    const history = useHistory();
    const [ isFlipped, setIsFlipped ] = useState(false);
    const [ isArrow, setArrow ] = useState(false);
    const notSmall = useMediaQuery('(min-width:391px)');
    const ownedCourse: boolean = ( () => user?.product.includes(course?.id) )();
    return <ReactCardFlip isFlipped={ isFlipped }>
        <div>
            <Card style={ notSmall ?
                { height: '28rem', width: '22rem', cursor: "pointer" } :
                { height: '28rem', width: '14.3rem' }
            }
                  className="course"
                  onClick={ () => setIsFlipped(!isFlipped) }
                  onMouseEnter={ () => setArrow(true) }
                  onMouseLeave={ () => setArrow(false) }
            >
                <Card.Img variant="top" src={ course?.imgUrl }/>
                <Card.Body>
                    <Card.Title style={ {
                        fontWeight: 'bolder',
                        padding: '0.8rem 0 1rem 0',
                        fontSize: '1.14rem'
                    } }>
                        { course?.name }
                    </Card.Title>
                    <Card.Text style={ { fontSize: '1.2rem', fontFamily: 'Lato, sans-serif', textAlign: 'left' } }>
                        <ul>
                            {
                                course?.meta?.competenciesDevelopment
                                    .slice(0, course?.name === 'MANAGING CORPORATE REPUTATION' ? 1 : 2)
                                    .map((e, idx) =>
                                        <div key={ idx }>
                                            {/*Awareness of the various aspects of Corporate Image Building. //61chars*/ }
                                            {
                                                course?.name === 'MANAGING CORPORATE REPUTATION' ?
                                                    <li>{ e.slice(0, 45) }...</li> :
                                                    <li>{ e }</li>
                                            }
                                        </div>)
                            }
                        </ul>
                        <span style={ { fontWeight: 'bold' } }>And more ....</span>
                    </Card.Text>
                    <Card.Text className="arrows">
                        {
                            isArrow ? <MdArrowForward/> : <MdChevronRight/>
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={ notSmall ? { height: '28rem', width: '22rem' } : { height: '28rem', width: '14.3rem' } }
                  className="course"
                  onClick={ () => setIsFlipped(!isFlipped) }
            >
                <Card.Img variant="top" src={ course?.imgUrl }/>
                <Card.Body>
                    <Card.Title style={ {
                        fontWeight: 'bolder',
                        padding: '0.8rem 0',
                        fontSize: '1.14rem'
                    } }>
                        { course?.name }
                    </Card.Title>
                    <Card.Text style={ { fontSize: '1rem', fontFamily: 'Lato, sans-serif' } }>
                        Meant for <span style={ { fontWeight: 'bold' } }>
                        { course?.meta.participantLevel }
                    </span>
                        <br/>
                        Duration <span style={ { fontWeight: 'bold' } }>
                        { course?.meta.duration }
                    </span>
                        <div className="card-button">

                            <Button
                                onClick={ () => {
                                    history.push(`/course?id=${ course?.id }`)
                                } }
                            >
                                { ownedCourse ? "Go to course" : "Know More" }
                            </Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </ReactCardFlip>;
});
