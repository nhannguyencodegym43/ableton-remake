import React from "react";
import "./footer.css"
import Social from "./social/social.jsx";
import Education from "./education/education.jsx";
import Newsletter from "./newsletter/newsletter.jsx";

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
            </div>
        </>
    )
}

export default Footer;