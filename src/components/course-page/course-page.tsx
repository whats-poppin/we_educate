import React, {useState} from 'react';
import './course-page.css'
import {Button} from "react-bootstrap";
import {Accordion, AccordionDetails, Typography} from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import {BiDownArrow} from "react-icons/all";
import {SessionEvent} from "../../models/product";

// @ts-ignore
const CoursePage = ({selectedCourse, myDecipher, ownedCourse, organisation, handlePaymentIntent, setSnackbarDefinition})  => {
    const [readMore,setReadMore]=useState(false);
    const linkName=readMore?'Read Less':'...read more'
    return (
        <div className="coursePageRoot">
            <div className="courseInfo">

                <div className="courseInfoImg">
                    <img src={selectedCourse.imgUrl} alt={ selectedCourse.name }/>
                </div>
                <div className="courseInfoTxt">
                    <h1>{ selectedCourse.name }</h1>
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
                        {
                            selectedCourse.meta?.contents.map((e:string, idx:number) =>
                            <div key={ idx }>
                                <li>{e}</li>
                            </div>)
                        }
                    </ul>
                </div>
            </div>
            <div className="coursePayment">
                <h2>Course Features</h2>
                <ul>
                    <li>Meant For: { selectedCourse.meta.participantLevel }</li>
                    <li>Duration: { selectedCourse.meta.duration }</li>
                    <li>Taught By: { selectedCourse.meta.faculty }</li>
                </ul>
                <h2>Skills Developed</h2>
                <ul>
                    {
                        selectedCourse.meta?.competenciesDevelopment.map((e:string, idx:number) =>
                        <div key={ idx }>
                            <li>{e}</li>
                        </div>)
                    }
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
                   {
                       ownedCourse ? <Accordion TransitionProps={ { unmountOnExit: true } }>
                           <AccordionSummary
                               expandIcon={ <BiDownArrow/> }
                               aria-controls="panel1a-content"
                               id="panel1a-header"
                           >
                           </AccordionSummary>
                           <AccordionDetails>
                               { selectedCourse.events.map((e:SessionEvent, idx:number) =>
                                   <Typography key={ idx }>
                                       { myDecipher(e.joinLink) }
                                   </Typography>) }
                           </AccordionDetails>
                       </Accordion> : <>
                           <span className="coursePrice">
                                <h1>{ selectedCourse.meta.fee.split('per')[0].trim() }*</h1>
                           </span>
                           <Button variant = "outline-success" onClick={ organisation ? () => {
                           setSnackbarDefinition({
                               visible: true,
                               severity: 'success',
                               message: 'Mobile number:- 99531029310, email:- abhinav@we-educate.com'
                           });
                       } : handlePaymentIntent }>
                           { organisation ? 'Contact us to enroll' : `BUY NOW` }
                       </Button>
                           <span style={{
                               justifySelf: "flex-end",
                               alignSelf: "flex-end",
                               fontSize: "0.75rem",
                               // marginTop: "0"
                           }}>*per participant</span>
                           </>
                   }
               </div>
            </div>
        </div>
    );
};

export default CoursePage;
