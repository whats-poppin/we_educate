import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
// import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {useNavbarStyles} from "../../utils/component-styles/navbar";
import brand_logo from "../../assets/brand_logo.png";

export const Navbar = () => {
    const {brandLogo} = useNavbarStyles();
    return (
       <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <img src={brand_logo} alt="We educate" className={brandLogo}/>
                    <SearchIcon/>

                </Toolbar>
            </AppBar>
       </>
    );
}