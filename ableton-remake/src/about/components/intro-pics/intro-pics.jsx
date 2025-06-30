import React from "react";
import "./intro-pics.css"
function IntroPics() {
    return (
        <>
            <div className="intro-pics-container">
                <div className="intro-pics-background"></div>
                <div className="intro-pics-small"><img src="https://cdn-resources.ableton.com/resources/filer_thumbnails/misc-downloads/bl_live12_lite_1600x800jpg.jpg__1600x800_q85_subsampling-2.jpg" alt="Small intro-pics"/></div>
                <div className="intro-pics-large"><img src="https://cdn-resources.ableton.com/resources/filer_thumbnails/unsorted-uploads/f6a5863.jpg__1600x2000_q85_subsampling-2.jpg" alt="Large intro-pics"/></div>
            </div>
        </>
    )
}
export default IntroPics;