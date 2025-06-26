import React from "react";
import "./newsletter.css"
import EmailInput from "./email_input/email_input.jsx";
import Submit_button from "./submit_button/submit_button.jsx";
import SubmitButton from "./submit_button/submit_button.jsx";
function Newsletter() {
    return (
        <>
            <div className="newsletter-container">
                <h3>Sign up to our newsletter</h3>
                <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                <div className="newsletter-form">
                    <form action="#">
                        <EmailInput />
                        <SubmitButton />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Newsletter;