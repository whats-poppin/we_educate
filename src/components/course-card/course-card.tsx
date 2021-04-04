import React, { useContext, useState } from 'react';
import { Product } from "../../models/product";
import { UserDetailsContext } from "../../contexts/user-details";
import { useHistory } from 'react-router-dom';
import ReactCardFlip from "react-card-flip";
import { Button,Card } from 'react-bootstrap';
import "./course-card.css";

export const CourseCard: React.FC<{ course: Product }> = React.memo(({ course }) => {
    const { user } = useContext(UserDetailsContext);
    const history = useHistory();
    const [ isFlipped, setIsFlipped ] = useState(false);

    const ownedCourse: boolean = ( () => user?.product.includes(course.id) )();

    return <ReactCardFlip isFlipped={ isFlipped }>
        <div>
            <Card style = {{height: '25rem', width: '22rem'}}
                  className="course"
                  onClick={ () => setIsFlipped(!isFlipped) }
            >
                <Card.Img variant="top" src={course.imgUrl} />
                <Card.Body>
                    <Card.Title style = {{fontWeight: 'bold', padding: '0.7rem 0 0.7rem 0'}}>{ course.name  }</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style = {{height: '25rem', width: '22rem' }}
                  className="course"
                  onClick={ () => setIsFlipped(!isFlipped) }
            >
                <Card.Img variant="top" src={course.imgUrl} />
                <Card.Body>
                    <Card.Title style = {{fontWeight: 'bold'}}>{ course.name }</Card.Title>
                    <Card.Text>
                        <div className="card-button">
                            <Button variant="dark"
                                onClick={ () => {
                                history.push(`/course?id=${ course.id }`)
                            }} >
                                { ownedCourse ? 'Go to course' : 'KNOW MORE' }
                            </Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </ReactCardFlip>;
});