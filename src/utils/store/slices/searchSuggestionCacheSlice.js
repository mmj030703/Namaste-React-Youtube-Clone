import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionCacheSlice = createSlice({
    'name': 'Search Suggestion Cache',
    initialState: {
        // { 'i': ['iphone', 'i love my india'] }
        // { 'ip': ['iphone', 'iphone max'] }
        // { 'iph': ['iphone 12', 'iphone 12 pro max', 'iphone 12 max'] }
    },
    reducers: {
        addCache: (state, action) => {
            //* Way 1
            state = Object.assign(state, action.payload);

            //* Way 2  
            // return { ...state, ...action.payload }

            //* Should not do 
            //* Because Redux Toolkit says you can mutate the state internally but should not change the reference completely.
            // state = { ...state, ...action.payload }      //* Here we are storing a brand new Object i.e. changing the original reference 
        }
    }
});

export const { addCache } = searchSuggestionCacheSlice.actions;

export default searchSuggestionCacheSlice.reducer;