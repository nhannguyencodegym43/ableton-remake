import Home from "./home/home.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./about/about.jsx";
import Login from "./login/login.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ableton/about" element={<About />} />
                <Route path="/ableton/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App