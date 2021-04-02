import Button from '@material-ui/core/Button';
import React, { useContext } from 'react';
import { UserDetailsContext } from "../contexts/user-details";
import { useHistory } from "react-router-dom";
import { CourseCard } from "../components/course-card/course-card";
import { Product } from "../models/product";
import { AllCoursesContext } from "../contexts/all-courses";

export const MyCourses = () => {
    const { user } = useContext(UserDetailsContext);
    const { allCourses } = useContext(AllCoursesContext);
    const history = useHistory();
    const userCourses: Product[] = ( () => {
        const courses: Product[] = [];
        for ( const id of user.product ) {
            courses.push(allCourses.find(course => course.id === id));
        }
        return courses;
    } )();

    return <div style={ { display: 'grid', placeItems: 'center', padding: '1rem' } }>
        <h2 style={ { marginTop: '7rem', marginBottom: '3rem' } }>
            My Courses
        </h2>
        { user.product.length > 0
            ? userCourses.map((course, idx) =>
                <CourseCard key={ idx } course={ course }/>)
            : <div style={ { display: 'grid', placeItems: 'center' } }>
                <h4 style={ { marginBottom: '1.5rem' } }>
                    It looks you don't have any courses :-(
                </h4>
                <Button variant={ 'contained' } color={ 'primary' }
                        onClick={ () => history.push({ pathname: `/`, state: { showExplore: true } }) }>
                    Explore and start learning.
                </Button>
            </div> }
    </div>;
};