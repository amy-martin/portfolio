import React from "react";
import { Link } from "react-router-dom";
import { MarusCrochet } from "./MarusCrochet";
import { RedditClient } from "./RedditClient";

export const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <MarusCrochet />
            <RedditClient />
        </div>
    )
}