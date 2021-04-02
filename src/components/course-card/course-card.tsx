import React, { useContext } from 'react';
import { Card } from "@material-ui/core";
import { Product } from "../../models/product";
import { UserDetailsContext } from "../../contexts/user-details";

export const CourseCard: React.FC<{ course: Product }> = React.memo(({ course }) => {
    const { user } = useContext(UserDetailsContext);

    const ownedCourse: boolean = ( () => user?.product.includes(course.id) )();

    return <Card>
        { course.name }
        <br/>
        { ownedCourse ? 'Go to course' : 'know more' }
    </Card>;
});