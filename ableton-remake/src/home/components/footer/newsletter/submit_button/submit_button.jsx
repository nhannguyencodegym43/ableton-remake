import React from "react";
import "./submit_button.css"
function SubmitButton({buttonTitle = "Sign up"}) {
    return (
        <>
            <button type="submit">{buttonTitle}</button>
        </>
    )
}
export default SubmitButton;