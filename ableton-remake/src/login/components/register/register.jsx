import React from "react";
import "./register.css"
import RegisterForm from "./register-form/register-form.jsx";
function Register() {
    return (
        <>
            <div className="register-container">
                <h1>Register</h1>
                <hr/>
                <div className="register-desc">
                    <h3>New Customer? Please create an account.</h3>
                    <p>Your account lets you authorize and download Live plus your included library content.</p>
                </div>
                <RegisterForm />
            </div>
        </>
    )
}
export default Register;