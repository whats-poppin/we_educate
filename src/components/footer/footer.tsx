import React from 'react';
import './footer.css';
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/all";

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="FooterWrap">
                <div className="FooterLinksContainer">
                    <div className="FooterLinksWrapper">
                        <div className="FooterLinkItems">
                                {/*<div className="FooterLinkTitle"> About Us</div>*/}
                                <div className="FooterLink">About</div>
                                <div className="FooterLink">Explore</div>
                                <div className="FooterLink">Privacy</div>
                                <div className="FooterLink">T&C</div>
                        </div>
                        {/*<div className="FooterLinkItems">*/}
                        {/*        <div className="FooterLinkTitle"> About Us</div>*/}
                        {/*        <div className="FooterLink">About</div>*/}
                        {/*        <div className="FooterLink">Course</div>*/}
                        {/*        <div className="FooterLink">Explore</div>*/}
                        {/*        <div className="FooterLink">Terms Of Service</div>*/}
                        {/*</div>*/}
                    </div>
                    {/*<div className="FooterLinksWrapper">*/}
                    {/*    <div className="FooterLinkItems">*/}
                    {/*            <div className="FooterLinkTitle"> About Us</div>*/}
                    {/*            <div className="FooterLink">About</div>*/}
                    {/*            <div className="FooterLink">Course</div>*/}
                    {/*            <div className="FooterLink">Explore</div>*/}
                    {/*            <div className="FooterLink">Terms Of Service</div>*/}
                    {/*    </div>*/}
                    {/*    <div className="FooterLinkItems">*/}
                    {/*            <div className="FooterLinkTitle"> About Us</div>*/}
                    {/*            <div className="FooterLink">About</div>*/}
                    {/*            <div className="FooterLink">Course</div>*/}
                    {/*            <div className="FooterLink">Explore</div>*/}
                    {/*            <div className="FooterLink">Terms Of Service</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                    <div className="SocialMedia">
                            <div className="SocialMediaWrap">
                                <div className="SocialLogo">
                                    We Educate
                                </div>
                                <div className="WebsiteRights">
                                    We Educate © {new Date().getFullYear()} All rights reserved
                                </div>
                                <div className="SocialIcons">
                                    <div className="SocialIconLink">
                                        <FaInstagram/>
                                    </div>
                                    <div className="SocialIconLink">
                                        <FaLinkedin/>
                                    </div>
                                    <div className="SocialIconLink">
                                        <FaTwitter/>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default Footer;