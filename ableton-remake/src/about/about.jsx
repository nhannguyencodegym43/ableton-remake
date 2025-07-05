import React from "react";
import "./about.css"
import ShortNavBar from "./components/short_nav-bar/short_nav-bar.jsx";
import AboutNavBar from "./components/about_nav-bar/about_nav-bar.jsx";
import AboutBanner from "./components/about-banner/about-banner.jsx";
import IntroText from "./components/intro-text/intro-text.jsx";
import IntroPics from "./components/intro-pics/intro-pics.jsx";
import MusicText from "./components/music-text/music-text.jsx";
import MusicPics from "./components/music-pics/music-pics.jsx";
import MoreThanText from "./components/more_than-text/more_than-text.jsx";
import MoreThanPics from "./components/more_than-pics/more_than-pics.jsx";
import BelieveText from "./components/believe-text/believe-text.jsx";
import BelievePics from "./components/believe-pics/believe-pics.jsx";
import PassionateText from "./components/passionate-text/passionate-text.jsx";
import PassionatePics from "./components/passionate-pics/passionate-pics.jsx";
import WantText from "./components/want-text/want-text.jsx";
import WantPics from "./components/want-pics/want-pics.jsx";
import Footer from "../home/components/footer/footer.jsx";
import useDocumentTitle from "../useDocumentTitle/useDocumentTitle.jsx";

function About() {
    useDocumentTitle("Learn more about Ableton - maker of Live and Push | Ableton");
    return (
        <>
            <div className="about-container">
                <header>
                    <nav className="about_nav-bar"><AboutNavBar/></nav>
                    <nav className="about_nav-bar-2"><ShortNavBar/></nav>
                </header>
                <main className="about-main">
                    <div className="about-banner"><AboutBanner/></div>
                    <div className="intro-text"><IntroText/></div>
                    <div className="intro-pics"><IntroPics/></div>
                    <div className="make_music-text"><MusicText/></div>
                    <div className="make_music-pics"><MusicPics/></div>
                    <div className="more_than-text"><MoreThanText/></div>
                    <div className="more_than-pics"><MoreThanPics/></div>
                    <div className="believe-text"><BelieveText/></div>
                    <div className="believe-pics"><BelievePics/></div>
                    <div className="passionate-text"><PassionateText/></div>
                    <div className="passionate-pics"><PassionatePics/></div>
                    <div className="want-text"><WantText/></div>
                    <div className="want-pics"><WantPics/></div>
                </main>
                <hr/>
                <footer className="about_footer"><Footer/></footer>
            </div>
        </>
    )
}

export default About;