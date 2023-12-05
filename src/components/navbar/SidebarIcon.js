import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIconIsRotated, toggleIconIsRotated, toggleSidebarDisplay } from "../../slices/sidebarSlice";

export const SidebarIcon = () => {
    const isRotated = useSelector(selectIconIsRotated)
    const dispatch = useDispatch();
    const handleIconClick = () => {
        dispatch(toggleIconIsRotated());
        dispatch(toggleSidebarDisplay())
    };

  return (
    <img
      className={`sidebar-icon ${isRotated ? 'rotated' : ''}`}
      src={require('../../media/sidebar-icon.png')}
      alt="Sidebar Icon"
      onClick={handleIconClick}
    />
  );
};