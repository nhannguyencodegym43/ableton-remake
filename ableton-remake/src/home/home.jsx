import NavBar from "./components/nav_bar/nav_bar.jsx";
import Banner from "./components/banner/banner.jsx";
import "./home.css"
import Latest from "./components/latest/latest.jsx";
import Focus from "./components/focus/focus.jsx";
import Learn from "./components/learn/learn.jsx";
function Home() {

    return (
        <>
            <header>
            <nav className="nav-bar"><NavBar /></nav>
            </header>
            <main>
            <div className="banner"><Banner /></div>
            <div className="latest"><Latest /></div>
            <div className="focus"><Focus /></div>
            <div className="learn"><Learn /></div>
            <div className="more"></div>
            </main>
            <footer className="footer"></footer>
        </>
    )
}

export default Home