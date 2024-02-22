import { createSlice } from "@reduxjs/toolkit";

const toggleSidebarSlice = createSlice({
    'name': 'toggleSidebar',
    'initialState': {
        isSideBarOpen: true,
        showSmallMenu: false
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        toggleMiniSideBar: (state) => {
            state.showSmallMenu = !state.showSmallMenu;
        },
        removeSideBar: (state) => {
            state.isSideBarOpen = false;
        },
        removeMiniSideBar: (state) => {
            state.showSmallMenu = false;
        }
    }
});

export const { toggleSideBar, removeSideBar, removeMiniSideBar, toggleMiniSideBar } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;