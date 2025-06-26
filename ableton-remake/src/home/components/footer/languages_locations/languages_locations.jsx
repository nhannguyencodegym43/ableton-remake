import React from "react";
import "./languages_locations.css"
import LanguagesSelection from "./languages/languages_selection.jsx";
import LocationsSelection from "./locations/locations.jsx";
function LanguagesLocations() {
    return (
        <>
            <div className="languages-locations-container">
                <h3>Language and Location</h3>
                <div className="languages-locations-selection">
                    <LanguagesSelection />
                    <LocationsSelection />
                </div>
            </div>
        </>
    )
}
export default LanguagesLocations;