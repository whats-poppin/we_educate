import React from 'react';
import { Card } from "@material-ui/core";
import { Product } from "../../models/product";

export const CourseCard: React.FC<{ course: Product }> = ({ course }) => {
    return <Card>
        { course.name }
    </Card>;
};