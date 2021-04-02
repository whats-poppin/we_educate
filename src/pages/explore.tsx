import React, { useContext, useEffect } from 'react';
import { CourseCard } from "../components/course-card/course-card";
import { AllCoursesContext } from "../contexts/all-courses";
import { Product } from "../models/product";
import { Loader } from "../components/loader/loader";
import { fetchAllCourses } from "../controllers/courses-controller";
import { SnackbarToggleContext } from "../contexts/snackbar-toggle";

export const Explore = () => {
    const { allCourses, setAllCourses }: {
        allCourses: Product[],
        setAllCourses: React.Dispatch<React.SetStateAction<Product[]>>
    } = useContext(AllCoursesContext);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);

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
    }, [ allCourses, setAllCourses, setSnackbarDefinition ]);

    return <>
        <h1 style={ { marginTop: '7rem' } }>
            Explore
        </h1>
        { allCourses.length !== 0 ?
            allCourses.map((course, idx) => <CourseCard key={ idx }
                                                        course={ course }/>)
            : <Loader/> }
    </>;
};