import React, {useState} from 'react';
import './course-page.css'
import {Button} from "react-bootstrap";

const CoursePage = () => {
    const [readMore,setReadMore]=useState(false);
    const linkName=readMore?'Read Less':'...read more'
    return (
        <div className="coursePageRoot">
            <div className="courseInfo">

                <div className="courseInfoImg">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdl
                fHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""/>
                </div>
                <div className="courseInfoTxt">
                    <h1>Effective Managerial Communication</h1>
                    <p className="courseDesc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eos eveniet ipsa maiores mollitia obcaecati,
                        odit reprehenderit sed vel. Accusamus accusantium adipisci amet consequuntur corporis culpa delectus
                        doloremque doloribus, eaque earum eligendi eos eum excepturi explicabo harum ipsum, iure magni qui
                        <span className={!readMore ? "readMore" : " "}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fuga nulla tempore.
                        A atque eligendi itaque reiciendis totam ullam vel. Cupiditate distinctio fugiat officiis
                        veritatis vero. Quasi ratione sed voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur assumenda blanditiis cumque debitis distinctio enim itaque iure labore magni, nostrum numquam officiis quam sapiente sint tempora tempore veritatis voluptate. <br/>
                    </span>
                        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </p>
                    <h2 style={{
                        alignSelf: "start"
                    }}>Course Content</h2>
                    <ul style={{
                        alignSelf: "start"
                    }}>
                        <li>Conversation Skills</li>
                        <li>Listening Skills</li>
                        <li>Organizational Communication Strategy</li>
                        <li>Mechanics of Written Managerial Communication</li>
                        <li>Digital Communication</li>
                    </ul>
                </div>
            </div>
            <div className="coursePayment">
                <h2>Course Features</h2>
                <ul>
                    <li>20 hrs of live lectures</li>
                    <li> Meant for Level – II / Middle-level Managers</li>
                    <li> Downloadable Resources</li>
                    <li>Certificate of Completion</li>
                </ul>
                <h2>Skills Developed</h2>
                <ul>
                    <li>Active listening</li>
                    <li>Persuasive communication</li>
                    <li>Oral communication</li>
                    <li>Understanding and using body language correctly</li>
                    <li>Effective business writing</li>
                    <li>Communication skills for smart negotiating and conflict management</li>
                </ul>
               <div style = {{
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   justifyContent: "center",
                   width: "100%",
                   paddingBottom: "1rem",
                   borderRadius: "10px",
                   // background: "#731e1c"
               }}>
                    <span className="coursePrice">
                    <h1>₹10,000*</h1>
                </span>
                   <Button variant = "outline-success">
                       BUY NOW
                   </Button>
               </div>
                <span style={{
                    justifySelf: "flex-end",
                    alignSelf: "flex-end",
                    fontSize: "0.75rem",
                    marginTop: "-1rem"
                }}>*per participant</span>
            </div>
        </div>
    );
};

export default CoursePage;