import React, {useEffect} from "react";
import "./languages_selection.css"
import axios from "axios";
function LanguagesSelection() {
    const [languages, setLanguages] = React.useState([]);
    const fetchLanguages = async () => {
        try {
            const response = await axios.get("http://localhost:3001/languages");
            setLanguages(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchLanguages();
    }, [])
    return (
        <>
            <div className="languages-selection">
                <select name="language">
                    {languages.map((language, index) => (
                        <option key={index} value={language.name}>{language.name}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
export default LanguagesSelection;