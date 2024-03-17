import { createSlice } from "@reduxjs/toolkit";

const toggleSidebarSlice = createSlice({
    'name': 'toggleSidebar',
    'initialState': {
        isSideBarOpen: true,
        isMiniSideBarOpen: false
    },
    reducers: {
        openSideBar: (state) => {
            state.isSideBarOpen = true;
        },
        removeSideBar: (state) => {
            state.isSideBarOpen = false;
        },
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        openMiniSideBar: (state) => {
            state.isMiniSideBarOpen = true;
        },
        removeMiniSideBar: (state) => {
            state.isMiniSideBarOpen = false;
        },
        toggleMiniSideBar: (state) => {
            state.isMiniSideBarOpen = !state.isMiniSideBarOpen;
        },
    }
});

export const { openSideBar, toggleSideBar, removeSideBar, openMiniSideBar, removeMiniSideBar, toggleMiniSideBar } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;