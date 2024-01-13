import React from "react";
import { ProjectCard } from "./ProjectCard";

export const MarusCrochet = () => {
    const projectInfo = {
        title: "Maru's Crochet",
        id: 'marus-crochet',
        description:"Maru's Crochet is a sample interactive full-stack e-commerce web app created using the PERN stack to integrate the product database, server logic and user interface.",
        imgList: [require("../../media/marus-crochet-1.png"), require("../../media/marus-crochet-2.png"), require("../../media/marus-crochet-3.png"), require("../../media/marus-crochet-4.png")],
        secondLinkName: 'Github Repository',
        secondLink:"https://github.com/amy-martin/marus-crochet/",
        linkName: "Maru's Crochet",
        link: 'https://maru-crochet-fe.onrender.com/'

    }

    return (
        <ProjectCard projectInfo={projectInfo} />
    )
}