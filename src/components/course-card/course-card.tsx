import React, { useContext, useState } from 'react';
import { Product } from "../../models/product";
import { UserDetailsContext } from "../../contexts/user-details";
import { useHistory } from 'react-router-dom';
import ReactCardFlip from "react-card-flip";
import { Button, Card } from 'react-bootstrap';
import "./course-card.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const CourseCard: React.FC<{ course: Product }> = React.memo(({ course }) => {
    const { user } = useContext(UserDetailsContext);
    const history = useHistory();
    const [ isFlipped, setIsFlipped ] = useState(false);
    const notSmall = useMediaQuery('(min-width:391px)');
    const ownedCourse: boolean = ( () => user?.product.includes(course.id) )();
    return <ReactCardFlip isFlipped={ isFlipped }>
        <div>
            <Card style={ notSmall ? { height: '28rem', width: '22rem' } : { height: '28rem', width: '14.3rem'} }
                  className="course"
                  onClick={ () => setIsFlipped(!isFlipped) }
            >
                <Card.Img variant="top" src={ course.imgUrl }/>
                <Card.Body>
                    <Card.Title style={ {
                        fontWeight: 'bolder',
                        padding: '0.8rem 0 1rem 0',
                        fontSize: '1.14rem'
                    } }>{ course.name }</Card.Title>
                    <Card.Text style={ { fontSize: '1rem', fontFamily: 'Lato, sans-serif' } }>
                        Meant for <span style={ { fontWeight: 'bold' } }>{ course.meta.participantLevel }</span>
                        <br/>
                        Duration <span style={ { fontWeight: 'bold' } }>{ course.meta.duration }</span>
                        <br/>
                        Taught By <span style={ { fontWeight: 'bold' } }>{ course.meta.faculty }</span>
                    </Card.Text>
                    <Card.Text style={ {
                        fontWeight: 'bold', fontSize: '1.6rem', position: "absolute",
                        right: '20px',
                    } }> { '>' }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={ notSmall ? { height: '28rem', width: '22rem' } : { height: '28rem', width: '14.3rem'}}
                  className="course"
                  onClick={ () => setIsFlipped(!isFlipped) }
            >
                <Card.Img variant="top" src={ course.imgUrl }/>
                <Card.Body>
                    <Card.Title style={ {
                        fontWeight: 'bolder',
                        padding: '0.8rem 0 0.8rem 0',
                        fontSize: '1.14rem'
                    } }>{ course.name }</Card.Title>
                    <Card.Text style={ { fontSize: '1.2rem', fontFamily: 'Lato, sans-serif', textAlign: 'left' } }>
                        { course.meta?.competenciesDevelopment.slice(0, course.name === 'MANAGING CORPORATE REPUTATION' ? 1 : 2).map((e, idx) =>
                            <div key={ idx }>
                                { idx + 1 }. { e }
                                <br/>
                            </div>) }
                        <span style={ { fontWeight: 'bold' } }>And more ....</span>
                        <div className="card-button">
                            <Button variant="dark"
                                    onClick={ () => {
                                        history.push(`/course?id=${ course.id }`)
                                    } }>
                                { ownedCourse ? 'Go to course' : 'KNOW MORE' }
                            </Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </ReactCardFlip>;
});
