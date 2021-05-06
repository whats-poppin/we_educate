import { BsSearch } from "react-icons/bs";
import React, { useContext, useState } from "react";
import './search-bar.css'
import { Autocomplete } from "@material-ui/lab";
import { AllCoursesContext } from "../../contexts/all-courses";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { SnackbarToggleContext } from "../../contexts/snackbar-toggle";

export const SearchField = () => {
    const { allCourses } = useContext(AllCoursesContext);
    const { setSnackbarDefinition } = useContext(SnackbarToggleContext);

    const history = useHistory();

    return <Autocomplete
        id="search-bar"
        className="search_input"
        freeSolo
        onChange={ (event, value) => {
            const product = allCourses.find(course => course.name === value);
            if ( product )
                history.push(`course?id=${ product.id }`);
            else
                setSnackbarDefinition({
                    severity: 'error',
                    message: "No result found",
                    visible: true
                });
        } }
        options={ allCourses.map((course) => course.name) }
        renderInput={ (params) => (
            <TextField { ...params }
                       label="Search Courses"
                       margin="normal"
                       variant="outlined"/>
        ) }
    />
};

export const SearchBar: React.FC<{ isTransparentNavbar: boolean }> = ({ isTransparentNavbar }) => {
    const [ showSearchBar, setShowSearchBar ] = useState(false);
    const history = useHistory();

    return <>
        <BsSearch className="search_button" style={ isTransparentNavbar && history.location.pathname === "/"? { color: 'white' } : {} } onClick={ () => {
            setShowSearchBar(!showSearchBar)
        } }/>
        { showSearchBar ? <div className="fade-in" style={ { width: 300 } }>
            <SearchField/>
        </div> : null }
    </>
};
