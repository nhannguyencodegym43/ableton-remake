import React from "react";
import "./login-form.css"
import {Link} from "react-router-dom";
import LoginFormContent from "./login-form-content/login-form-content.jsx";
function LoginForm() {
    return (
        <>
            <div className="login-form-container">
                <h1>Log in</h1>
                <hr/>
                <div className="login-form-desc">
                    <h3>Why do I need to log in?</h3>
                    <p>To use any version of Live (including Live Lite or our free trial) you need an Ableton account. It takes less than a minute to create one, and even less to log in if you already have one.</p>
                </div>
                <LoginFormContent />
            </div>
        </>
    )
}
export default LoginForm;