import React, {useEffect} from "react";
import "./latest.css"
import axios from "axios";

function Latest() {
    const [latests, setLatests] = React.useState([]);
    const fetchLatests = async () => {
        try {
            const response = await axios.get("http://localhost:3001/latests");
            setLatests(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchLatests();
    }, [])
    return (
        <>
            <div className="latest-container">
                <div className="latest-header-links">
                    <div className="latest-header">
                        <h1>The latest from Ableton</h1>
                    </div>
                    <div className="latest-links">
                        <a href="#all">All posts</a>
                        <a href="#artists">Artists</a>
                        <a href="#news">News</a>
                        <a href="#downloads">Downloads</a>
                        <a href="#tutorials">Tutorials</a>
                        <a href="#videos">Videos</a>
                        <a href="#loop">Loop</a>
                    </div>
                </div>
                <div className="latest-content">
                    {latests.map((item) => (
                        <div className="latest-content-card">
                            <a href={item.href}><img src={item.src} alt={item.alt}/></a>
                            <div className="card-tag" style={{backgroundColor: `${item.backgroundColor}`}}>{item.type}</div>
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Latest;