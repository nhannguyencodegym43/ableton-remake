import "./nav_bar.css"
import React from 'react';
function NavBar() {

    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    <a href="#home"><img src="../../../../public/home/logo_ableton.PNG" alt="Ableton Remake Logo" /></a>
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
                    <a href="#login">Log in or register</a>
                </div>
            </div>
        </>
    )
}

export default NavBar