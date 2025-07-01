import React from "react";
import "./login.css"
import AboutNavBar from "../about/components/about_nav-bar/about_nav-bar.jsx";
import LoginForm from "./components/login-form/login-form.jsx";

function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-navbar"><AboutNavBar moreColor="black" moreWeight="normal"/> </div>
                <div className="login-content">
                    <div className="login-form"><LoginForm /></div>
                    <div className="register"></div>
                </div>
                <hr/>
                <div className="login-footer"></div>
            </div>
        </>
    )
}

export default Login;