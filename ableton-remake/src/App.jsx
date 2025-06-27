import Home from "./home/home.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./about/about.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App