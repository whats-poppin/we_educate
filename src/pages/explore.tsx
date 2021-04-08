import React, { useContext } from 'react';
import { CourseCard } from "../components/course-card/course-card";
import { AllCoursesContext } from "../contexts/all-courses";
import { Product } from "../models/product";
import { Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { Loader } from "../components/loader/loader";

export const Explore = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    const { allCourses }: {
        allCourses: Product[]
    } = useContext(AllCoursesContext);

    return <div ref={ ref }>
        <h1 style={ { marginBottom: '3rem', textAlign: "center", fontFamily: ' Montserrat, sans-serif' }} >
            EXPLORE
        </h1>
        { allCourses.length >= 1 ?
            <Container>
                <Row className={ 'justify-content-md-center' }>
                    { allCourses.map((course, idx) =>
                        <Col style={ { flexGrow: 0, margin: '1rem 0.5rem' } } key={ idx }>
                            <CourseCard course={ course }/>
                        </Col>
                    ) }
                </Row>
            </Container> : <Loader/> }
    </div>;
});
