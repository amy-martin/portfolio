import React from "react";

export const Skills = () => {
    return (
        <section id="skills">
            <h3>Skills</h3>
            <ul className="skills-list">
                <li>
                    <img src={require("../../media/html-logo.png")} alt="HTML" title="HTML" />
                </li>
                <li>
                    <img src={require("../../media/css-logo.png")} alt="CSS" title="CSS" />
                </li>
                <li>
                    <img src={require("../../media/js-logo.png")} alt="JavaScript" title="JavaScript" />
                </li>
                <li>
                    <img src={require("../../media/postgres-logo.png")} alt="Postgres" title="Postgres" />
                </li>
                <li>
                    <img src={require("../../media/expressjs_logo.png")} alt="Express.js" title="Express" />
                </li>
                <li>
                    <img src={require("../../media/react-logo.png")} alt="React" title="React" />
                </li>
                <li>
                    <img src={require("../../media/node-logo.png")} alt="Node.js" title="Node" />
                </li>
            </ul>
        </section>
    )
}