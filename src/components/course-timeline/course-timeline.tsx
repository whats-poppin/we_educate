import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './course-timeline.css'
import { AiTwotoneCalendar as WorkIcon } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import { Product } from "../../models/product";

const CourseTimeline = ({ ownedCourse, myDecipher }: { ownedCourse: Product, myDecipher: (encoded: string) => string }) => {
    const [ show, setShow ] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return <div className="rootTimeLineContainer">
            <VerticalTimeline layout={ '1-column' }>
                { ownedCourse.events.length > 0 ?
                    ownedCourse.events.map((event) => <>
                        <Modal show={ show } onHide={ handleClose }>
                            <Modal.Header closeButton>
                                <Modal.Title>Meeting Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Please Click to join meeting</h5>
                                <a href={ myDecipher(event.joinLink) }>
                                    { myDecipher(event.joinLink) }
                                </a>
                            </Modal.Body>
                        </Modal>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={ { background: '#731E1C', color: '#fff' } }
                            contentArrowStyle={ { borderRight: '7px solid  #731E1C' } }
                            date={ new Date(event.startTime.seconds * 1000).toLocaleString() }
                            iconStyle={ { background: '#731E1C', color: '#fff' } }
                            icon={ <WorkIcon/> }
                            onTimelineElementClick={ handleShow }
                            style={ { cursor: "pointer" } }
                        >
                            <h3 className="vertical-timeline-element-title">Lecture</h3>
                            <p>
                                Duration: { event.duration } Hour
                            </p>
                        </VerticalTimelineElement></>) : <h3>
                        No Sessions Planned Yet!!
                    </h3> }
            </VerticalTimeline>
        </div>;
};

export default CourseTimeline;
