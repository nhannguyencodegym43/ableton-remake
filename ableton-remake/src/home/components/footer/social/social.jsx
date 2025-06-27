import React from "react";
import "./social.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faFacebook,
    faInstagram,
    faTiktok,
    faXTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

function Social() {
    return (
        <>
            <div className="social-container">
                <div className="social-text">
                    <a href="#register_push_move"><p>Register Live, Push or Move ></p></a>
                    <Link to="/about"><a href="#about"><p>About Ableton ></p></a></Link>
                    <a href="#jobs"><p>Jobs ></p></a>
                </div>
                <div className="social-icons">
                    <a href="#meta"><FontAwesomeIcon icon={faFacebook} style={{color: "#0866ff"}}/></a>
                    <a href="#X"><FontAwesomeIcon icon={faXTwitter} style={{color: "black"}}/></a>
                    <a href="#youtube"><FontAwesomeIcon icon={faYoutube} style={{color: "red"}}/></a>
                    {/*<a href="#instagram"><FontAwesomeIcon icon={faInstagram} style={{color: "pink"}}/></a>*/}
                    <a href="#instagram"><img src="/home/Instagram_logo.PNG" alt="Instagram Logo" className="instagram_logo"/></a>
                    {/*<a href="#tiktok"><FontAwesomeIcon icon={faTiktok} style={{color: "black"}}/></a>*/}
                    <a href="#instagram"><img src="/home/Tiktok_logo.PNG" alt="Tiktok Logo" className="tiktok_logo"/></a>
                    <a href="#discord"><FontAwesomeIcon icon={faDiscord} style={{color: "#5865f2"}} className="discord_logo"/></a>
                </div>
            </div>
        </>
    )
}

export default Social;