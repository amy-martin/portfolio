import React from "react";
import { ProjectCard } from "./ProjectCard";


export const AlfredosIronwork = () => {
    const projectInfo = {
        title: "Alfredo's Ironwork",
        id: 'alfredos-ironworok',
        description: "Alfredo's Ironwork is an interactive web app for a small business where potential clients can learn more about the business' services as well as submit estimate inquiries that are sent directly to the employees in charge. I collaborated with the company to conceptualize, design, and develop both the website and the overall branding.",
        imgList: [require("../../media/alfredos-ironwork-1.png"), require("../../media/alfredos-ironwork-2.png"), require("../../media/alfredos-ironwork-3.png"), require("../../media/alfredos-ironwork-4.png")],
        linkName: "Alfredo's Ironwork",
        link: 'https://alfredosironwork.com/',
    }

    return (
        <ProjectCard projectInfo={projectInfo} />
    )
}