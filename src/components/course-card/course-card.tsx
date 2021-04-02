import React, { useContext, useState } from 'react';
import { Product } from "../../models/product";
import { UserDetailsContext } from "../../contexts/user-details";
import { useHistory } from 'react-router-dom';
import ReactCardFlip from "react-card-flip";
import { Button } from '@material-ui/core';

export const CourseCard: React.FC<{ course: Product }> = React.memo(({ course }) => {
    const { user } = useContext(UserDetailsContext);
    const history = useHistory();
    const [ isFlipped, setIsFlipped ] = useState(false);

    const ownedCourse: boolean = ( () => user?.product.includes(course.id) )();

    return <ReactCardFlip isFlipped={ isFlipped }>
        <>
            { course.name }
            <br/>
            <Button onClick={ () => setIsFlipped(!isFlipped) }>
                Flip
            </Button>
        </>
        <>
            <Button onClick={ () => setIsFlipped(!isFlipped) }>
                Flip
            </Button>
            <h3 onClick={ () => {
                history.push(`/course?id=${ course.id }`)
            } }>
                { ownedCourse ? 'Go to course' : 'know more' }
            </h3>
        </>
    </ReactCardFlip>;
});