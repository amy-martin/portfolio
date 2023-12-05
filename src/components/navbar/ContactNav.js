import React from "react"

export const ContactNav = () => {
    return (
            <ul className="contact-list">
                <li><a href="mailto:amymartinm97@gmail.com"><img src={require("../../media/email-logo.png")} title="Email"/></a></li>
                <li><a href="https://www.linkedin.com/in/amy-martin-41a5a2136/"><img src={require("../../media/linkedin-logo.png")} title="LinkedIn"/></a></li>
                <li><a href="https://github.com/amy-martin"><img src={require("../../media/github-logo.png")} title="Github"/></a></li>
            </ul>
    )
}