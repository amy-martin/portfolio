import React from "react";
import { ProjectCard } from "./ProjectCard";

export const MarusCrochet = () => {
    const projectInfo = {
        title: "Maru's Crochet",
        id: 'marus-crochet',
        description:"Maru's Crochet is a sample interactive full-stack e-commerce web app created using the PERN stack to integrate the product database, server logic and user interface.",
        imgList: ["../../media/marus-crochet-1.png", "../../media/marus-crochet-2.png", "../../media/marus-crochet-3.png", "../../media/marus-crochet-4.png"],
        linkName: 'Github Repository',
        link:"https://github.com/amy-martin/marus-crochet/",
    }

    return (
        <ProjectCard projectInfo={projectInfo} />
    )
}