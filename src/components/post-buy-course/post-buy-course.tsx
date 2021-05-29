import React from 'react';
import CourseTimeline from "../course-timeline/course-timeline";
import CourseAnnouncements from "../course-announcements/course-announcements";
import './post-buy-course.css'

const PostBuyCourse = () => {
    return (
        <div>
            <h1 className="courseTitle">
                Course Title
            </h1>
            <div className="postContainer">
                <CourseTimeline/>
                <CourseAnnouncements/>
            </div>
        </div>
    );
};

export default PostBuyCourse;