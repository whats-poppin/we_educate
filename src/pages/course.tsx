import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AllCoursesContext } from "../contexts/all-courses";
import { fetchAllCourses } from "../controllers/courses-controller";
import { SnackbarToggleContext } from "../contexts/snackbar-toggle";
import { Product } from "../models/product";
import { Loader } from "../components/loader/loader";

export const Course = () => {
    const location = useLocation();
    const history = useHistory();
    const { allCourses, setAllCourses } = useContext(AllCoursesContext);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const [ selectedCourse, setSelectedCourse ] = useState<Product>(null);

    useEffect(() => {
        if ( allCourses.length === 0 ) {
            ( async () => {
                const allCoursesResponse = await fetchAllCourses();
                if ( typeof allCoursesResponse === 'string' ) {
                    setSnackbarDefinition({
                        visible: true,
                        severity: 'error',
                        message: allCoursesResponse
                    });
                } else
                    setAllCourses(allCoursesResponse);
            } )();
        }
        const urlParams = new URLSearchParams(location.search);
        const id = urlParams.get('id');
        if ( !id ) history.push('/');
        else {
            for ( const course of allCourses ) {
                if ( course.id === id ) {
                    setSelectedCourse(course)
                    break;
                }
            }
        }
    }, [ allCourses, location, setSnackbarDefinition, setAllCourses, history ]);

    return selectedCourse ? <div style={ { marginTop: '20rem' } }>
        Course { selectedCourse.name }
    </div> : <Loader/>;
};