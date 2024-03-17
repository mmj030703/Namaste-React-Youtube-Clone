import { configureStore } from "@reduxjs/toolkit";
import toggleSideBar from "./slices/toggleSidebarSlice";
import searchSuggestionsCache from "./slices/searchSuggestionCacheSlice";
import liveChat from './slices/liveChat';
import homepageVideosSlice from "./slices/homepageVideosSlice";

const appStore = configureStore({
    reducer: {
        'toggleSidebar': toggleSideBar,
        'searchSuggestionsCache': searchSuggestionsCache,
        'liveChat': liveChat,
        'homepageVideos': homepageVideosSlice
    }
});

export default appStore;