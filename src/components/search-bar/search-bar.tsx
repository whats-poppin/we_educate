import { BsSearch } from "react-icons/bs";
import { Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import './search-bar.css'
import { Autocomplete } from "@material-ui/lab";
import { AllCoursesContext } from "../../contexts/all-courses";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const SearchField = () => {
    const { allCourses } = useContext(AllCoursesContext);
    const history = useHistory();

    return <Autocomplete
        id="search-bar"
        freeSolo
        onChange={ (event, value) => {
            const product = allCourses.find(course => course.name === value);
            if ( product )
                history.push(`course?id=${ product.id }`);
        } }
        options={ allCourses.map((course) => course.name) }
        renderInput={ (params) => (
            <TextField className="search_input" { ...params } label="freeSolo" margin="normal" variant="outlined"/>
        ) }
    />
    // <InputGroup>
    //     <FormControl
    //         placeholder="Press Enter to search"
    //         aria-label="Recipient's username"
    //         aria-describedby="basic-addon2"
    //     />
    // </InputGroup>
};

export const SearchBar: React.FC = () => {
    const [ showSearchBar, setShowSearchBar ] = useState(false);
    return <Form inline>
        <BsSearch className="search_button" onClick={ () => {
            setShowSearchBar(!showSearchBar)
        } }/>
        { showSearchBar ? <div className="fade-in">
            <SearchField/>
        </div> : null }
    </Form>
};
