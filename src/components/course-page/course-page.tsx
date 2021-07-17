import React from 'react';
import './course-page.css'
import { Button } from "react-bootstrap";
import { Product } from "../../models/product";
import { Organisation } from "../../models/organisation";
import PostBuyCourse from "../post-buy-course/post-buy-course";

type CoursePageProps = {
    selectedCourse: Product;
    myDecipher: (encode: string) => string,
    ownedCourse: boolean;
    organisation: Organisation;
    handlePaymentIntent: () => void;
    setSnackbarDefinition: any;
}

const CoursePage = ({
                        selectedCourse,
                        myDecipher,
                        ownedCourse,
                        organisation,
                        handlePaymentIntent,
                        setSnackbarDefinition
                    }: CoursePageProps) => {
    return (
        <>
            <div className="coursePageRoot">
                <div className="courseInfo">
                    <div className="courseInfoImg">
                        <img src={ selectedCourse.imgUrl } alt={ selectedCourse.name }/>
                    </div>
                    <br/>
                    {selectedCourse.name}
                    <div className="courseInfoTxt">
                        <h2 style={ { alignSelf: "start" } }>
                            Course Content
                        </h2>
                        <ul style={ { alignSelf: "start" } }>
                            { selectedCourse.meta?.contents.map((e: string, idx: number) =>
                                <div key={ idx }>
                                    <li>{ e }</li>
                                </div>) }
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
                        { selectedCourse.meta?.competenciesDevelopment.map((e: string, idx: number) =>
                            <div key={ idx }>
                                <li>{ e }</li>
                            </div>) }
                    </ul>
                    <div style={ {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        paddingBottom: "1rem",
                        borderRadius: "10px",
                    } }>
                        {/*{ selectedCourse.events.map((e: SessionEvent, idx: number) =>*/ }
                        {/*    <Typography key={ idx }>*/ }
                        {/*        { myDecipher(e.joinLink) }*/ }
                        {/*    </Typography>) }*/ }
                        <span className="coursePrice">
                        <h1>{ selectedCourse.meta.fee.split('per')[0].trim() }*</h1>
                    </span>
                        { !ownedCourse && <Button variant="outline-success" onClick={ organisation ? () => {
                            setSnackbarDefinition({
                                visible: true,
                                severity: 'success',
                                message: 'Mobile number:- 99531029310, email:- abhinav@we-educate.com'
                            });
                        } : handlePaymentIntent }>
                            { organisation ? 'Contact us to enroll' : `BUY NOW` }
                        </Button> }
                        <span style={ {
                            justifySelf: "flex-end",
                            alignSelf: "flex-end",
                            fontSize: "0.75rem",
                        } }>*per participant</span>
                    </div>
                </div>
            </div>
            { ownedCourse && <PostBuyCourse ownedCourse={ selectedCourse } myDecipher={ myDecipher }/> }
        </>
    );
};

export default CoursePage;
