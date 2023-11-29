import React from "react";
import { Link } from "react-router-dom";

export const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <ul>
                <li><Link to='/alfredos-ironwork'><img src={require('../../media/alfredos-ironwork-logo.jpeg')}/>Alfredo's Ironwork</Link></li>
                <li><Link to='/marus-crochet'><img src={require('../../media/maru-logo.png')}/>Maru's Crochet</Link></li>
                <li><Link to='/reddit-client'><img src={require('../../media/reddit-logo.png')}/>Reddit Client</Link></li>
            </ul>
        </div>
    )
}