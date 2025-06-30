import React from "react";
import "./want-pics.css"
function WantPics() {
    return (
        <>
            <div className="want-pics-container">
                <img src="https://ableton-production.imgix.net/link/photo-live.jpg?auto=format&dpr=1.5&fit=crop&fm=jpg&ixjsv=1.1.3&q=66&w=747" alt="Want pics"/>
                <div className="want-pics-desc">
                    <p>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</p>
                    <a href="#jobs">See latest jobs ></a>
                </div>
            </div>
        </>
    )
}
export default WantPics;