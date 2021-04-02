import React, { useContext } from 'react';
import { CourseCard } from "../components/course-card/course-card";
import { AllCoursesContext } from "../contexts/all-courses";
import { Product } from "../models/product";
import { Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";

export const Explore = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    const { allCourses }: {
        allCourses: Product[]
    } = useContext(AllCoursesContext);

    return <div ref={ ref }>
        <h1 style={ { marginTop: '7rem' } }>
            Explore
        </h1>
        <Container>
            <Row className={ 'justify-content-md-center' }>
                { allCourses.map((course, idx) =>
                    <Col style={ { flexGrow: 0 } } key={ idx }>
                        <CourseCard course={ course }/>
                    </Col>
                ) }
            </Row>
        </Container>
    </div>;
});