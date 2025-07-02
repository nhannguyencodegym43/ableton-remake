import React from "react";
import "./login.css"
import AboutNavBar from "../about/components/about_nav-bar/about_nav-bar.jsx";
import LoginForm from "./components/login-form/login-form.jsx";
import Register from "./components/register/register.jsx";
import Footer from "../home/components/footer/footer.jsx";

function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-navbar"><AboutNavBar moreColor="black" moreWeight="normal"/> </div>
                <hr/>
                <div className="login-content">
                    <div className="login-form"><LoginForm /></div>
                    <div className="register"><Register /></div>
                </div>
                <hr/>
                <div className="login-footer"><Footer /></div>
            </div>
        </>
    )
}

export default Login;