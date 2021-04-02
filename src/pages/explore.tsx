import React, { useContext } from 'react';
import { CourseCard } from "../components/course-card/course-card";
import { AllCoursesContext } from "../contexts/all-courses";
import { Product } from "../models/product";

export const Explore = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    const { allCourses }: {
        allCourses: Product[]
    } = useContext(AllCoursesContext);

    return <div ref={ ref }>
        <h1 style={ { marginTop: '7rem' } }>
            Explore
        </h1>
        { allCourses.map((course, idx) =>
            <CourseCard key={ idx }
                        course={ course }/>) }
    </div>;
});