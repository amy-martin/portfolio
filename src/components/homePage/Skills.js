import React from "react";

export const Skills = () => {
    return (
        <section id="skills">
            <h3>Skills</h3>
            <ul class="skills-list">
                <li><img src={require("../../media/html-logo.png")} title="HTML"/></li>
                <li><img src={require("../../media/css-logo.png")} title="CSS"/></li>
                <li><img src={require("../../media/js-logo.png")} title="JavaScript"/></li>
                <li><img src={require("../../media/postgres-logo.png")} title="Postgres"/></li>
                <li><img src={require("../../media/expressjs_logo.png")} title="Express"/></li>
                <li><img src={require("../../media/react-logo.png")} title="React"/></li>
                <li><img src={require("../../media/node-logo.png")} title="Node"/></li>
            </ul>
        </section>
    )
}