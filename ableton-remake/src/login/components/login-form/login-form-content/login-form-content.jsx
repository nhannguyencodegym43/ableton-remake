import React from "react";
import "./login-form-content.css"
import SubmitButton from "../../../../home/components/footer/newsletter/submit_button/submit_button.jsx";
function LoginFormContent() {
    return (
        <>
            <form className="login-form-content">
                <label htmlFor="email">E-mail or username</label>
                <input type="text" name="email"/>
                <div className="password-style">
                    <label htmlFor="password">Password</label>
                    <a href="#forgot_password">Forgot password?</a>
                </div>
                <input type="password" name="password"/>
                <SubmitButton buttonTitle="Log in" />
            </form>
        </>
    )
}
export default LoginFormContent;