import React, {useEffect} from "react";
import "./locations.css"
import axios from "axios";
function LocationsSelection() {
    const [locations, setLocations] = React.useState([]);
    const fetchLocations = async () => {
        try {
            const response = await axios.get("http://localhost:3001/locations");
            setLocations(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchLocations();
    }, [])
    return (
        <>
            <div className="locations-selection">
                <select name="language">
                    {locations.map((location, index) => (
                        <option key={index} value={location.name}>{location.name}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
export default LocationsSelection;