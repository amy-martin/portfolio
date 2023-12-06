import React from "react";


export const AlfredosIronwork = () => {
    const projectInfo = {
        title: "Maru's Crochet",
        id: 'marus-crochet',
        description: "Alfredo's Ironwork is an interactive web app for a small business where potential clients can learn more about the business' services as well as submit estimate inquiries that are sent directly to the employees in charge. I collaborated with the company to conceptualize, design, and develop both the website and the overall branding.",
        imgList: [require("../../media/alfredos-ironwork-1"), require("../../media/alfredos-ironwork-2"), require("../../media/alfredos-ironwork-3"), require("../../media/alfredos-ironwork-4")],
        linkName: 'Github Repository',
        link:"https://github.com/amy-martin/marus-crochet/",
    }

    return (
        <ProjectCard projectInfo={projectInfo} />
    )
}