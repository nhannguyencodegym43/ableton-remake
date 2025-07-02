import React, {useEffect} from "react";
import "./register-form.css"
import axios from "axios";

function RegisterForm() {
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
            <form className="register-form-container">
                <div className="register-form-content">
                    <label htmlFor="email">E-mail</label> <br/>
                    <input type="email" name="email"/> <br/>
                    <label htmlFor="password">Password</label> <br/>
                    <input type="password" name="password"/> <br/>
                    <label htmlFor="first-name">First name</label> <br/>
                    <input type="text" name="first-name" placeholder="optional"/> <br/>
                    <p className="first-name-desc">So that we know what to call you if we email you.</p><br/>
                    <label htmlFor="last-name">Last name</label> <br/>
                    <input type="text" name="last-name" placeholder="optional"/> <br/>
                    <label htmlFor="country-region">Country or Region</label> <br/>
                    <select name="country-region">
                        {locations.map((location, index) => (
                            <option key={index} value={location.name}>{location.name}</option>
                        ))}
                    </select><br/>
                </div>
                <input type="checkbox" name="privacy_policy" className="register-checkbox"/><strong>Sign up to the Ableton newsletter to stay up to date with the
                latest
                special offers, tutorial videos, downloads, surveys and other news.</strong> It’s free and you can
                unsubscribe at any time. Further information is available in our <a href="#privacy_policy">Privacy
                Policy</a>. <br/>
                <button type="submit">Create account</button>
            </form>
        </>
    )
}

export default RegisterForm;