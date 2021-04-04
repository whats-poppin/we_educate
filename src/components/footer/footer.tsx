import React from 'react';
import './footer.css';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/all";
import { useHistory } from 'react-router-dom';

const Footer = () => {
    const footers = [ 'About', 'T&C' ];
    const history = useHistory();
    return (
        <div className="FooterContainer" >
            <div className="FooterWrap">
                <div className="FooterLinksContainer">
                    <div className="FooterLinksWrapper">
                        <div className="FooterLinkItems">
                            {
                                footers.map((footer) =>
                                    <div className="FooterLink" key={ footer } onClick={ () => {
                                        history.push(footer.toLowerCase())
                                    } }>{ footer.toUpperCase() }</div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="SocialMedia">
                    <div className="SocialMediaWrap">
                        <div className="SocialLogo">
                            We Educate
                        </div>
                        <div className="WebsiteRights">
                            We Educate © { new Date().getFullYear() } All rights reserved
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