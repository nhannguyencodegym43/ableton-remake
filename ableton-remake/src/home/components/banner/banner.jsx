import React from "react";
import "./banner.css"
function Banner() {
    return (
        <>
            <div className="banner">
                <div className="banner-picture">
                    <img src="../../../../public/home/banner.jpg" alt="Banner" />
                </div>
                <div className="banner-links">
                    <a href="#ableton12-2" className="link-header">Ableton Live 12.2 is here</a> <br/>
                    <a href="#ableton12-2_detail" className="link-detail">See what's new</a>
                </div>
            </div>
        </>
    )
}
export default Banner;