import "./about_nav-bar.css"
import React from 'react';
import {Link} from "react-router-dom";
function AboutNavBar({moreColor = "#ff764d", moreWeight = "bold"}) {

    return (
        <>
            <div className="about-navbar-container">
                <div className="about-logo">
                    <Link to="/"><a href="#home"><img src="/home/logo_ableton.PNG" alt="Ableton Remake Logo" /></a></Link>
                </div>
                <div className="about-nav-links">
                    <a href="#live">Live</a>
                    <a href="#push">Push</a>
                    <a href="#move">Move</a>
                    <a href="#note">Note</a>
                    <a href="#link">Link</a>
                    <a href="#shop">Shop</a>
                    <a href="#packs">Packs</a>
                    <a href="#help">Help</a>
                    <a href="#more" style={{color: `${moreColor}`, fontWeight: `${moreWeight}` }}>More +</a>
                </div>
                <div className="about-try-login">
                    <a href="#try" className="about-try">Try Live 12 for free</a>
                    <Link to="/ableton/login"><a href="#login">Log in or register</a></Link>
                </div>
            </div>
        </>
    )
}

export default AboutNavBar