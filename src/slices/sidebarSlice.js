
import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'navSidebar',
    initialState: {
        display: 'none',
        iconIsRotated: false
    },
    reducers: {
        toggleIconIsRotated: state => {
            state.iconIsRotated = !(state.iconIsRotated)
        },
        toggleSidebarDisplay: state => {
            if (!state.display || state.display === 'none') {
                state.display = 'flex'
            } else if (state.display === 'flex') {
                state.display = 'none'
            }
        },
        turnOffDisplay: state => {
            state.display = 'none'
        }
    }
})

export const {toggleSidebarDisplay, turnOffDisplay, toggleIconIsRotated} = sidebarSlice.actions;
export const selectSidebarDisplay = state => state.sidebar.display;
export const selectIconIsRotated = state => state.sidebar.iconIsRotated
export default sidebarSlice.reducer