import React from "react";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";

export const HomePage = () => {
    return (
        <div className="home-page">
            <div className="left">
                <h1>
                    Welcome
                </h1>
                <AboutMe />
            </div>
            <div className="right">
                <Projects />
                
            </div>
        </div>

    )
}