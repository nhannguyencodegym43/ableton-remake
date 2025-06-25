import React from "react";
import "./newsletter.css"
function Newsletter() {
    return (
        <>
            <div className="newsletter-container">
                <h3>Sign up to our newsletter</h3>
                <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                <div className="newsletter-form">
                    <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Newsletter;