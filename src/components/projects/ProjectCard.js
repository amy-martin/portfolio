import React from "react";

export const ProjectCard = (props) => {
    const {title, id, description, imgList, linkName, link, secondLink, secondLinkName} = props.projectInfo;

    return (
        <div className="project-card">
            <div class='project-title'>
                <h2>{title}</h2>
            </div>
            <div id={id} className="project-content">
                <p classname='project-description'>{description}</p>
                <div className='project-images'>
                    {imgList.map(img => {
                        
                        return <img className='projectImg' src={img}/>
                    })}
                </div>
                <a href={link}>{linkName}</a>
                {secondLink? <a href={secondLink}>{secondLinkName}</a>: null}
            </div>
        </div>
    )
}