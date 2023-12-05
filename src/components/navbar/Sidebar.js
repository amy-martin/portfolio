

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebarDisplay, toggleIconIsRotated, turnOffDisplay } from "../../slices/sidebarSlice";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const display = useSelector(selectSidebarDisplay);
  const sidebarRef = useRef(null);

  // useEffect(() => {

  //   const handleOutsideClick = (event) => {
  //       if (sidebarRef.current && !sidebarRef.current.contains(event.target) && display=='flex') {
  //           const sidebarIcon = document.querySelector('.sidebar-icon');
  //           if (sidebarIcon && sidebarIcon.contains(event.target)) {
  //           return;
  //           }
  //           dispatch(toggleIconIsRotated())
  //           dispatch(turnOffDisplay());
            
  //       }
  //   };
  //   if (display === 'flex') {
  //     document.addEventListener("click", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [dispatch]);


  const handleSelection = () => {
    dispatch(turnOffDisplay())
    dispatch(toggleIconIsRotated())
  }
  return (
      <div className="sidebar-container sidebar" style={{ display: `${display}` }} ref={sidebarRef}>
          <ul >
              <li onClick={handleSelection}><img src={require('../../media/home-icon.png')}/><Link to='/'>Home</Link></li>
              <li onClick={handleSelection}><img src={require('../../media/projects-icon.png')}/><Link to='/projects'>Projects</Link></li>
              <li onClick={handleSelection}><img src={require('../../media/aboutme-icon.png')}/><Link to='/about-me'>About Me</Link></li>
              <li onClick={handleSelection}><img src={require('../../media/resume-icon.png')}/><Link to='/about-me' id='resume-button'>Resume</Link></li>
          </ul>
      </div>
  );
};
