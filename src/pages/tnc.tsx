import React from "react";
import CoursePage from "../components/course-page/course-page";
import Footer from "../components/footer/footer";
import CourseTimeline from "../components/course-timeline/course-timeline";
import CourseAnnouncements from "../components/course-announcements/course-announcements";
import {Button} from "react-bootstrap";
import PostBuyCourse from "../components/post-buy-course/post-buy-course";

export const TnC = () => {
    return (
        <>
            {/*<h1 style={ { margin: '6rem' } }> T&C</h1>*/}
            {/*<CoursePage/>*/}
            <PostBuyCourse/>
            <Footer/>
        </>
    )
};