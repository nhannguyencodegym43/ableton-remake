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
function About() {
    return (
        <>
            <div className="about-container">
                <header>
                    <nav className="about_nav-bar"><AboutNavBar /></nav>
                    <nav className="about_nav-bar-2"><ShortNavBar /></nav>
                </header>
                <main className="about-main">
                    <div className="about-banner"><AboutBanner /></div>
                    <div className="intro-text"><IntroText /></div>
                    <div className="intro-pics"><IntroPics /></div>
                    <div className="make_music-text"><MusicText /></div>
                    <div className="make_music-pics"><MusicPics /></div>
                    <div className="more_than-text"><MoreThanText /></div>
                    <div className="more_than-pics"><MoreThanPics /></div>
                    <div className="believe-text">believe-text</div>
                    <div className="believe-pics">believe-pics</div>
                    <div className="passionate-text">passionate-text</div>
                    <div className="passionate-pics">passionate-pics</div>
                    <div className="want-text">want-text</div>
                    <div className="want-pics">want-pics</div>
                </main>
                <footer className="about_footer">footer</footer>
            </div>
        </>
    )
}
export default About;