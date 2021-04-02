import React, { useContext } from 'react';
import { Card } from "@material-ui/core";
import { Product } from "../../models/product";
import { UserDetailsContext } from "../../contexts/user-details";
import { useHistory } from 'react-router-dom';

export const CourseCard: React.FC<{ course: Product }> = React.memo(({ course }) => {
    const { user } = useContext(UserDetailsContext);
    const history = useHistory();

    const ownedCourse: boolean = ( () => user?.product.includes(course.id) )();

    return <Card>
        { course.name }
        <br/>
        <h3 onClick={ () => {
            history.push(`/course?id=${ course.id }`)
        } }>
            { ownedCourse ? 'Go to course' : 'know more' }
        </h3>
    </Card>;
});