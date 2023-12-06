import React from "react";
import { Link } from "react-router-dom";
import { MarusCrochet } from "./MarusCrochet";
import { RedditClient } from "./RedditClient";
import {AlfredosIronwork} from "./AlfredosIronwork"

export const Projects = () => {
    return (
        <div className="projects">
            <h2 className="page-title">Projects</h2>
            <AlfredosIronwork />
            <MarusCrochet />
            <RedditClient />
        </div>
    )
}