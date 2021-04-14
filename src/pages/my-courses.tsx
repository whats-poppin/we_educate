import Button from '@material-ui/core/Button';
import React, { useContext, useEffect, useState } from 'react';
import { UserDetailsContext } from "../contexts/user-details";
import { useHistory } from "react-router-dom";
import { CourseCard } from "../components/course-card/course-card";
import { Product } from "../models/product";
import { AllCoursesContext } from "../contexts/all-courses";
import { SnackbarToggleContext } from "../contexts/snackbar-toggle";

export const MyCourses = () => {
    const { user } = useContext(UserDetailsContext);
    const { allCourses } = useContext(AllCoursesContext);
    const [ userCourses, setUserCourses ] = useState([]);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const history = useHistory();

    useEffect(() => {
        if ( user ) {
            ( () => {
                const courses: Product[] = [];
                for ( const id of user?.product ) {
                    courses.push(allCourses.find(course => course.id === id));
                }
                setUserCourses(courses);
            } )();
        }
    }, [ user, allCourses ]);


    return !user ? <div style={ { display: 'grid', placeItems: 'center', padding: '5rem' } }>
        To be added in a courses,
        <Button variant={ 'contained' } color={ 'primary' } onClick={ () => {
            setSnackbarDefinition({
                visible: true,
                severity: 'success',
                message: 'Mobile number:- 99531029310, email:- abhinav@we-educate.com'
            });
        } }>
            Contact us
        </Button>
    </div> : <div style={ { display: 'grid', placeItems: 'center', padding: '5rem' } }>
        { user?.product.length > 0
            ? userCourses.map((course, idx) =>
                <CourseCard key={ idx } course={ course }/>)
            : <div style={ { display: 'grid', placeItems: 'center' } }>
                <h4 style={ { marginBottom: '1.5rem' } }>
                    It looks like you don't have any courses
                </h4>
                <Button variant={ 'contained' } color={ 'primary' }
                        onClick={ () => history.push({ pathname: `/`, state: { showExplore: true } }) }>
                    Explore and start learning.
                </Button>
            </div> }
    </div>;
};
