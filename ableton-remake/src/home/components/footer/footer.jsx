import React from "react";
import "./footer.css"
import Social from "./social/social.jsx";
import Education from "./education/education.jsx";
import Newsletter from "./newsletter/newsletter.jsx";
import Community from "./community/community.jsx";
import LanguagesLocations from "./languages_locations/languages_locations.jsx";
import Policy from "./policy/policy.jsx";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <h1 className="footer-header">Ableton</h1>
                <div className="footer-content">
                    <div className="social"><Social/></div>
                    <div className="education"><Education/></div>
                    <div className="newsletter"><Newsletter/></div>
                </div>
                <div className="footer-content-2">
                    <div className="community"><Community/></div>
                    <div className="languages_locations"><LanguagesLocations/></div>
                </div>
                <div className="footer-policy"><Policy /></div>
            </div>
        </>
    )
}

export default Footer;