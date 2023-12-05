import React from "react";
import { ContactNav } from "./ContactNav";
import { SidebarIcon } from "./SidebarIcon";

export const Nav = () => {
    return (
        <nav>
          <ContactNav />
          <div className="sidebar-icon-container">
            <SidebarIcon />
          </div>
        </nav>
    )
}