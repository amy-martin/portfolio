

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebarDisplay, toggleIconIsRotated, turnOffDisplay } from "../../slices/sidebarSlice";
import { Link } from "react-router-dom";
import MyResume from '../../media/Amy_Martin_Resume.pdf'

export const Sidebar = () => {
  const dispatch = useDispatch();
  const display = useSelector(selectSidebarDisplay);
  const sidebarRef = useRef(null);

  useEffect(() => {

    const handleOutsideClick = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && display=='flex') {
            const sidebarIcon = document.querySelector('.sidebar-icon');
            if (sidebarIcon && sidebarIcon.contains(event.target)) {
            return;
            }
            dispatch(toggleIconIsRotated())
            dispatch(turnOffDisplay());
            
        }
    };
    if (display === 'flex') {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dispatch]);


  const handleSelection = () => {
    dispatch(turnOffDisplay())
    dispatch(toggleIconIsRotated())
  }
  return (
      <div className="sidebar-container sidebar" style={{ display: `${display}` }} ref={sidebarRef}>
          <ul >
              <Link to='/portfolio'><li onClick={handleSelection}><img src={require('../../media/home-icon.png')}/>Home</li></Link>
              <Link to='/portfolio/projects'><li onClick={handleSelection}><img src={require('../../media/projects-icon.png')}/>Projects</li></Link>
              <Link to='/portfolio/about-me'><li onClick={handleSelection}><img src={require('../../media/aboutme-icon.png')}/>About Me</li></Link>
              <a href={require('../../media/Amy_Martin_Resume.pdf')} download="Amy_Martin_Resume.pdf"><li onClick={handleSelection}><img src={require('../../media/resume-icon.png')}/>Resume</li></a>
          </ul>
      </div>
  );
};
