import React from "react";
import "./policy.css"
import PolicyTexts from "./policy-texts/policy_texts.jsx";
import MadeWithLove from "./made_with_love/made_with_love.jsx";
function Policy() {
    return (
        <>
            <div className="policy-container">
                <PolicyTexts />
                <MadeWithLove />
            </div>
        </>
    )
}
export default Policy;