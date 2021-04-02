import React, { useContext, useEffect } from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Footer from "../components/footer/footer";
import { Explore } from "./explore";
import { useLocation } from "react-router-dom";
import { SnackbarToggleContext } from "../contexts/snackbar-toggle";
import { fetchAllCourses } from "../controllers/courses-controller";
import { Product } from "../models/product";
import { AllCoursesContext } from "../contexts/all-courses";

const Home = () => {
    const exploreRef = React.createRef<HTMLDivElement>();
    const location = useLocation();
    const { allCourses, setAllCourses }: {
        allCourses: Product[],
        setAllCourses: React.Dispatch<React.SetStateAction<Product[]>>
    } = useContext(AllCoursesContext);

    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);

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
    }, [ allCourses, setAllCourses, setSnackbarDefinition ]);

    useEffect(() => {
        if ( ( location.state as { showExplore: boolean } )?.showExplore && exploreRef ) {
            exploreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
    }, [ location, exploreRef ])

    return <>
        <Jumbotron/>
        <Explore ref={ exploreRef }/>
        <Footer/>
    </>
}

export default Home;