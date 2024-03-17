import { createSlice } from "@reduxjs/toolkit";

const homepageVideosSlice = createSlice({
    'name': 'homepageVideosSlice',
    'initialState': {
        videos: []
    },
    'reducers': {
        updateVideos: (state, action) => {
            console.log(action.payload);
            state.videos.push(...action.payload);
        }
    }
});

export const { updateVideos } = homepageVideosSlice.actions;

export default homepageVideosSlice.reducer;