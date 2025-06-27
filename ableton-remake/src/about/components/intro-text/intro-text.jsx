import React from "react";
import "./intro-text.css"
function IntroText() {
    return (
        <>
            <div className="intro-text-container">
                <p className="intro-text-header">We make <a href="#live">Live</a>, <a href="#push">Push</a>, <a href="#note">Note</a>, <a
                    href="#move">Move</a> and <a href="#link">Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>
                <p className="intro-text-desc">Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>
        </>
    )
}
export default IntroText;