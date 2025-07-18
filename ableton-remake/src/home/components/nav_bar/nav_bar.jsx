import "./nav_bar.css"
import React from 'react';
import {Link} from "react-router-dom";
function NavBar() {

    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/"><a href="#home"><img src="/home/logo_ableton.PNG" alt="Ableton Remake Logo" /></a></Link>
                </div>
                <div className="nav-links">
                    <a href="#live">Live</a>
                    <a href="#push">Push</a>
                    <a href="#move">Move</a>
                    <a href="#note">Note</a>
                    <a href="#link">Link</a>
                    <a href="#shop">Shop</a>
                    <a href="#packs">Packs</a>
                    <a href="#help">Help</a>
                    <a href="#more">More +</a>
                </div>
                <div className="try-login">
                    <a href="#try" className="try">Try Live 12 for free</a>
                    <Link to="/ableton/login"><a href="#login">Log in or register</a></Link>
                </div>
            </div>
        </>
    )
}

export default NavBar