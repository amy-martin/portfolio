import React from "react";
import { ProjectCard } from "./ProjectCard";

export const RedditClient = () => {
    const projectInfo = {
        title: 'Reddit Client',
        id: 'reddit-duplicate',
        description: "The Reddit Client Duplicate is a front-end app leveraging Reddit's API to simulate its front-end user interface.",
        imgList: [require("../../media/reddit-1.png"), require("../../media/reddit-2.png")],
        linkName: 'Github Repository',
        link:"https://github.com/amy-martin/reddit-app/",
    }

    return (
        <ProjectCard projectInfo={projectInfo} />
    )
}