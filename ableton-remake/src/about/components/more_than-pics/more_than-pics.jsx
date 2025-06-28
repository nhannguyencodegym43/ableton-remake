import React from "react";
import "./more_than-pics.css"
function MoreThanPics() {
    return (
        <>
            <div className="more_than-pics-container">
                <div className="more_than-pics-background"></div>
                <div className="more_than-pics-small"><img src="https://ableton-production.imgix.net/about/photo-2.jpg?dpr=1.5&fit=crop&h=143&ixjsv=1.1.3&q=66&w=191" alt="Small more_than-pics"/></div>
                <div className="more_than-pics-large"><img src="https://ableton-production.imgix.net/about/photo-1.jpg?dpr=1.5&fit=crop&h=238&ixjsv=1.1.3&q=66&w=238" alt="Large more_than-pics"/></div>
            </div>
        </>
    )
}
export default MoreThanPics;