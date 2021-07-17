import React from 'react';
import CourseTimeline from "../course-timeline/course-timeline";
import './post-buy-course.css'
import { Product } from "../../models/product";

const PostBuyCourse = ({ ownedCourse, myDecipher }: { ownedCourse: Product, myDecipher: (encoded: string) => string }) => {
    return <div>
        <h1 className="courseTitle">
            Session Details
        </h1>
        <div className="postContainer">
            <CourseTimeline ownedCourse={ ownedCourse } myDecipher={ myDecipher }/>
            <div style={ { margin: '1rem' } }>
                <h3 style={ { margin: '0' } }>
                    Course Study Material
                </h3>
                { ownedCourse.meta.studyMaterial.map((material) => <div style={ { margin: '1rem' } }>
                    <h4>
                        { material.name }
                    </h4>
                    <a href={ material.link }>
                        Link to resource
                    </a>
                    <br/>
                </div>) }
            </div>
        </div>
    </div>;
};

export default PostBuyCourse;
