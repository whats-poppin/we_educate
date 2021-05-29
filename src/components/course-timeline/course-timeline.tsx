import React, {useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './course-timeline.css'
import { AiTwotoneCalendar as WorkIcon } from "react-icons/ai";
import {Button, Modal} from "react-bootstrap";

const CourseTimeline = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className="rootTimeLineContainer">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Meeting Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Please Click to join meeting</h1>
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <Button onClick={handleClose} variant="secondary">Close Modal</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
            <VerticalTimeline layout={'1-column'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#731E1C', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #731E1C' }}
                    date="17th April, 2021"
                    iconStyle={{ background: '#731E1C', color: '#fff' }}
                    icon={<WorkIcon />}
                    onTimelineElementClick={handleShow}
                    style={{
                    cursor: "pointer"}
                    }
                >
                    <h3 className="vertical-timeline-element-title">Lecture</h3>
                    {/*<h4 className="vertical-timeline-element-subtitle">1 Hour</h4>*/}
                    <p>
                        5:00PM - 6:00PM
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#DFDFDF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DFDFDF' }}
                    date="19th April, 2021"
                    iconStyle={{ background: '#DFDFDF', color: '#000' }}
                    icon={<WorkIcon />}
                    onTimelineElementClick={handleShow}
                    style={{
                        cursor: "pointer"}
                    }
                >
                    <h3 className="vertical-timeline-element-title">Lecture</h3>
                    {/*<h4 className="vertical-timeline-element-subtitle">1 Hour</h4>*/}
                    <p>
                        5:00PM - 6:00PM
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#DFDFDF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DFDFDF' }}
                    date="19th April, 2021"
                    iconStyle={{ background: '#DFDFDF', color: '#000' }}
                    icon={<WorkIcon />}
                    onTimelineElementClick={handleShow}
                    style={{
                        cursor: "pointer"}
                    }
                >
                    <h3 className="vertical-timeline-element-title">Lecture</h3>
                    {/*<h4 className="vertical-timeline-element-subtitle">1 Hour</h4>*/}
                    <p>
                        5:00PM - 6:00PM
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#DFDFDF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DFDFDF' }}
                    date="19th April, 2021"
                    iconStyle={{ background: '#DFDFDF', color: '#000' }}
                    icon={<WorkIcon />}
                    onTimelineElementClick={handleShow}
                    style={{
                        cursor: "pointer"}
                    }
                >
                    <h3 className="vertical-timeline-element-title">Lecture</h3>
                    {/*<h4 className="vertical-timeline-element-subtitle">1 Hour</h4>*/}
                    <p>
                        5:00PM - 6:00PM
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#DFDFDF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DFDFDF' }}
                    date="19th April, 2021"
                    iconStyle={{ background: '#DFDFDF', color: '#000' }}
                    icon={<WorkIcon />}
                    onTimelineElementClick={handleShow}
                    style={{
                        cursor: "pointer"}
                    }
                >
                    <h3 className="vertical-timeline-element-title">Lecture</h3>
                    {/*<h4 className="vertical-timeline-element-subtitle">1 Hour</h4>*/}
                    <p>
                        5:00PM - 6:00PM
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#DFDFDF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DFDFDF' }}
                    date="19th April, 2021"
                    iconStyle={{ background: '#DFDFDF', color: '#000' }}
                    icon={<WorkIcon />}
                    onTimelineElementClick={handleShow}
                    style={{
                        cursor: "pointer"}
                    }
                >
                    <h3 className="vertical-timeline-element-title">Lecture</h3>
                    {/*<h4 className="vertical-timeline-element-subtitle">1 Hour</h4>*/}
                    <p>
                        5:00PM - 6:00PM
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default CourseTimeline;