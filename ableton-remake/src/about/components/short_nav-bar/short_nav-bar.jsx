import React from "react";
import "./short_nav-bar.css"
import {Link} from "react-router-dom";

function ShortNavBar() {
    return (
        <>
            <div className="short-container">
                <Link to="/about" style={{color: "#ff764d"}}>About</Link>
                <a href="#jobs">Jobs</a>
                <a href="#apprenticeships">Apprenticeships</a>
            </div>
        </>
    )
}

export default ShortNavBar;