import React, { useContext, useEffect } from 'react';
import { CourseCard } from "../components/course-card/course-card";
import { AllCoursesContext } from "../contexts/all-courses";
import { Product } from "../models/product";
import { Loader } from "../components/loader/loader";

export const Explore = () => {
    const { allCourses, setAllCourses }: {
        allCourses: Product[],
        setAllCourses: React.Dispatch<React.SetStateAction<Product[]>>
    } = useContext(AllCoursesContext);

    useEffect(() => {
        if ( allCourses.length === 0 ) {
            setTimeout(() => setAllCourses([ new Product(
                '1', 'bruh', [], '', {
                    duration: '1 ghnta',
                    faculty: ' bruh',
                    participantLevel: "Level – 0 / Lower-level Managers",
                    studyMaterial: [ 'bruhible' ],
                    competenciesDevelopment: [ 'u be a bruh' ],
                    contents: [ 'Be a bruh' ],
                    fee: 'Get us laid'
                }
            ) ]), 2000);
        }
    }, [ allCourses, setAllCourses ]);

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