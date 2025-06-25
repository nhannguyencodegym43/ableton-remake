import React, {useEffect} from "react";
import "./focus.css"
import axios from "axios";

function Focus() {
    const [focuses, setFocuses] = React.useState([]);
    const fetchFocuses = async () => {
        try {
            const response = await axios.get("http://localhost:3001/focuses");
            setFocuses(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchFocuses();
    }, [])
    return (
        <>
            <div className="focus-container">
                <div className="focus-header">
                    <h1>Move in focus</h1>
                </div>
                <div className="focus-content">
                    {focuses.map((item) => (
                        <div className="focus-content-card">
                            <a href={item.href}><img src={item.src} alt={item.alt}/></a>
                            <div className="card-tag"
                                 style={{backgroundColor: `${item.backgroundColor}`}}>{item.type}</div>
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Focus;