import React from "react";
import "./login-form-content.css"
import SubmitButton from "../../../../home/components/footer/newsletter/submit_button/submit_button.jsx";

function LoginFormContent() {
    return (
        <>
            <form className="login-form-content">
                <label htmlFor="email">E-mail or username</label> <br/>
                <input type="email" name="email"/>
                <label htmlFor="password" className="password-label">Password</label>
                <a href="#forgot_password">Forgot password?</a> <br/>
                <input type="password" name="password" /> <br/>
                <SubmitButton buttonTitle="Log in"/>
            </form>
        </>
    )
}

export default LoginFormContent;