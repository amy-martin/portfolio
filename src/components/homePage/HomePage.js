import React from "react";
import { Skills } from "./Skills";
import { Link } from "react-router-dom";


export const HomePage = () => {
    return (
        <div className="home-page">
                <h1>
                    Welcome
                </h1>
                <p>
                    My name is Amy Martin. I am a Los Angeles-based full-stack developer with a passion for crafting dynamic and responsive web applications. Specializing in PostgreSQL, Express, React, Node.js, I thrive on bringing ideas to life through code. Explore my <Link to='/portfolio/projects'>projects</Link> to witness the seamless fusion of creativity and functionality in the digital realm.
                </p>
                <Skills />
        </div>

    )
}