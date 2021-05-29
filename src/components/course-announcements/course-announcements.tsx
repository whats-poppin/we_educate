import React from 'react';
import './course-announcements.css'
import {Button} from "react-bootstrap";

const CourseAnnouncements = () => {
    return (
        <div className="rootAnnouncements">

            <div className="announcements">
                <h2>Announcements</h2>
                <div className="announcementsList">
                    <ul>
                        <li>Announcement 1</li>
                        <li>Announcement 2</li>
                        <li>Announcement 3</li>
                        <li>Announcement 4</li>
                        <li>Announcement 5</li>
                        <li>Announcement 5</li>
                        <li>Announcement 5</li>
                        <li>Announcement 5</li>
                        <li>Announcement 5</li>
                        <li>Announcement 5</li>
                    </ul>
                </div>
            </div>
            <div  className= "btnContainer">
                <div className="buttonLink">
                    Contact Instructor
                </div>
                <div className="buttonLink">
                    Download Resources
                </div>
            </div>
        </div>
    );
};

export default CourseAnnouncements;