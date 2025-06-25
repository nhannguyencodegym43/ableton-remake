import React from "react";
import "./more.css"

function More() {
    return (
        <>
            <div className="more-container">
                <p>More:</p>
                <a href="#all">All posts</a>
                <a href="#artists">Artists</a>
                <a href="#news">News</a>
                <a href="#downloads">Downloads</a>
                <a href="#tutorials">Tutorials</a>
                <a href="#videos">Videos</a>
                <a href="#loop">Loop</a>
                <a href="#one">One Thing</a>
            </div>
        </>
    )
}

export default More;