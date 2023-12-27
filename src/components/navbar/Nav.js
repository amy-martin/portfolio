import React from "react";
import { ContactNav } from "./ContactNav";
import { SidebarIcon } from "./SidebarIcon";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
          <ContactNav />
          <Link className='logo' to='/portfolio'><img src={require('../../media/logo.png')}/></Link>
          <div className="sidebar-icon-container">
            <SidebarIcon />
          </div>
        </nav>
    )
}