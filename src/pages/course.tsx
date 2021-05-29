import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AllCoursesContext } from "../contexts/all-courses";
import { fetchAllCourses, onCoursePurchaseSuccess } from "../controllers/courses-controller";
import { SnackbarToggleContext } from "../contexts/snackbar-toggle";
import { Product } from "../models/product";
import { Loader } from "../components/loader/loader";
import { UserDetailsContext } from "../contexts/user-details";
import { decipher } from "../utils/encrypt-decrypt";
import { __DEV__, loadScript } from "../App";
import { saveTransaction } from "../controllers/transaction-controller";
import { Individual } from "../models/individual";
import "./course.css";
import Footer from "../components/footer/footer";
import { OrganisationDetailsContext } from "../contexts/organisation-details";
import CoursePage from "../components/course-page/course-page";

export const DisplayRazorpay = async ({ name, email, courseName, courseId, qty, userId, setSnackbarDefinition, setUser, user }: {
    name: string, email: string, courseName: string,
    courseId: string, qty: number, userId: string, setSnackbarDefinition: any, setUser: any, user: Individual
}) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if ( !res ) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
    }
    const data = await fetch('https://secret-oasis-81789.herokuapp.com/razorpay',
        {
            method: 'POST', headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify({
                courseId, qty
            })
        }).then((t) =>
        t.json()
    ).catch(() => setSnackbarDefinition({
        visible: true,
        severity: 'error',
        message: 'Something went wrong, please try again later.',
    }));

    if ( data ) {
        if ( data.status === 'success' ) {
            const options = {
                key: __DEV__ ? 'rzp_test_TAfCw5zIu2X8dJ' : 'rzp_test_TAfCw5zIu2X8dJ',
                currency: data.currency,
                amount: data.response.amount.toString(),
                order_id: data.id,
                name: courseName,
                description: 'Purchase and Start Learning',
                image: 'https://secret-oasis-81789.herokuapp.com/logo.svg',
                handler: async (response: any) => {
                    await saveTransaction({
                        razorpayId: response.razorpay_payment_id,
                        userId,
                        totalAmount: data.response.amount / 100
                    });
                    await onCoursePurchaseSuccess(courseId, userId);
                    setSnackbarDefinition({
                        visible: true,
                        severity: 'success',
                        message: 'Successfully purchased the course'
                    });
                    setUser({ ...user, product: [ ...user.product, courseId ] })
                },
                prefill: {
                    name,
                    email
                }
            }
            const _window = window as any;
            const paymentObject = new _window.Razorpay(options)
            paymentObject.open();
        } else setSnackbarDefinition({
            visible: true,
            severity: 'error',
            message: data.message,
        });
    }
};

export const Course = () => {
    const location = useLocation();
    const history = useHistory();
    const { user, setUser } = useContext(UserDetailsContext);
    const { organisation } = useContext(OrganisationDetailsContext);
    const { allCourses, setAllCourses } = useContext(AllCoursesContext);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);
    const [ selectedCourse, setSelectedCourse ] = useState<Product>(null);
    const [ ownedCourse, setOwnedCourse ] = useState(false);
    const myDecipher = decipher(process.env.REACT_APP_M_NHI_BTAUNGA);
    const handlePaymentIntent = () => {
        if ( !user ) {
            history.push('/auth');
        } else {
            try {
                DisplayRazorpay({
                    courseName: selectedCourse.name,
                    name: user.name,
                    email: user.email,
                    courseId: selectedCourse.id,
                    qty: 1,
                    userId: user.id,
                    setSnackbarDefinition,
                    setUser,
                    user
                }).then(() => {
                    console.log('Payment Intent Processed');
                });
            } catch ( e ) {
                setSnackbarDefinition({
                    message: e.message,
                    severity: 'error',
                    visibility: true
                });
            }
        }
    };
    useEffect(() => {
        if ( allCourses.length === 0 ) {
            ( async () => {
                const allCoursesResponse = await fetchAllCourses();
                if ( typeof allCoursesResponse === 'string' ) {
                    setSnackbarDefinition({
                        visible: true,
                        severity: 'error',
                        message: allCoursesResponse
                    });
                } else
                    setAllCourses(allCoursesResponse);
            } )();
        }
        const urlParams = new URLSearchParams(location.search);
        const id = urlParams.get('id');
        if ( !id ) history.push('/');
        else {
            let courseFound = false;
            for ( const course of allCourses ) {
                if ( course.id === id ) {
                    setSelectedCourse(course)
                    courseFound = true;
                    break;
                }
            }
            if ( !courseFound )
                history.push('/');

            const ownedCourse = ( () => user?.product.includes(id) )();
            setOwnedCourse(ownedCourse);
        }
    }, [ allCourses, location, setSnackbarDefinition, setAllCourses, history, user ]);

    return selectedCourse ?
        <>
            <CoursePage
                selectedCourse={selectedCourse}
                myDecipher={myDecipher}
                ownedCourse={ownedCourse}
                organisation={organisation}
                handlePaymentIntent={handlePaymentIntent}
                setSnackbarDefinition={setSnackbarDefinition}
            />
            <Footer/>
        </>
        :
        <Loader/>;
};
