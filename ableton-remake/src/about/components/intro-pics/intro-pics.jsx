import React from "react";
import "./intro-pics.css"
function IntroPics() {
    return (
        <>
            <div className="intro-pics-container">
                <div className="intro-pics-background"></div>
                <div className="intro-pics-small"><img src="https://ableton-production.imgix.net/about/photo-2.jpg?dpr=1.5&fit=crop&h=143&ixjsv=1.1.3&q=66&w=191" alt="Small intro-pics"/></div>
                <div className="intro-pics-large"><img src="https://ableton-production.imgix.net/about/photo-1.jpg?dpr=1.5&fit=crop&h=238&ixjsv=1.1.3&q=66&w=238" alt="Large intro-pics"/></div>
            </div>
        </>
    )
}
export default IntroPics;