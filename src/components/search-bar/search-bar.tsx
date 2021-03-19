import {BsSearch} from "react-icons/bs";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import React, {useState} from "react";

export const SearchField = () => {
    return <InputGroup>
        <FormControl
            placeholder="Press Enter to search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
        />
    </InputGroup>
};

export const SearchBar: React.FC = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    return <Form inline>
        <BsSearch className="search_button" onClick={() => {
            setShowSearchBar(!showSearchBar)
        }}/>
        {showSearchBar ? <div className="fade-in">
            <SearchField/>
        </div> : null}
    </Form>
};