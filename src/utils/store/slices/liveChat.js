import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHATS_MAX_LENGTH } from "../../constants";

const liveChat = createSlice({
    'name': 'Live Chat',
    'initialState': {
        liveChats: []
    },
    reducers: {
        addLiveChat: (state, action) => {
            if (state.liveChats.length > LIVE_CHATS_MAX_LENGTH) state.liveChats.splice(LIVE_CHATS_MAX_LENGTH, (state.liveChats.length - LIVE_CHATS_MAX_LENGTH));
            state.liveChats.unshift(action.payload);
        }
    }
});

export const { addLiveChat } = liveChat.actions;

export default liveChat.reducer;