import React, {useEffect} from "react";
import "./learn.css"
import axios from "axios";

function Learn() {
    const [learn, setLearn] = React.useState([]);
    const fetchLearn = async () => {
        try {
            const response = await axios.get("http://localhost:3001/learn");
            setLearn(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchLearn();
    }, [])
    return (
        <>
            <div className="learn-container">
                <div className="learn-header">
                    <h1>Learn more about Live 12</h1>
                </div>
                <div className="learn-content">
                    {learn.map((item) => (
                        <div className="learn-content-card">
                            <a href={item.href}><img src={item.src} alt={item.alt}/>
                            <div className="card-tag"
                                 style={{backgroundColor: `${item.backgroundColor}`}}>{item.type}</div>
                            <h4>{item.title}</h4>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Learn;