import { useDispatch, useSelector } from "react-redux";
import LiveChatMessage from "./LiveChatMessage";
import { useEffect, useState } from "react";
import { RANDOM_USER_GENERATOR_API_URL } from "../utils/constants";
import { addLiveChat } from "../utils/store/slices/liveChat";

const LiveChatMessagesList = () => {
    const [liveChatMessage, setLiveChatMessage] = useState("");
    const LiveChatMessages = useSelector(store => store.liveChat.liveChats);
    const dispatch = useDispatch();

    useEffect(() => {
        const liveChatInterval = setInterval(() => (getLiveChats()), 2000);

        return () => {
            clearInterval(liveChatInterval);
        }
    }, []);

    const getLiveChats = async () => {
        let randomSize = Math.floor(Math.random() * 3);
        const data = await fetch(RANDOM_USER_GENERATOR_API_URL + (randomSize !== 0 ? randomSize : randomSize + 1));
        let json = await data.json();
        const liveChats = Array.isArray(json) ? json : [json];

        liveChats.map(liveChat => dispatch(addLiveChat(liveChat)));
    };

    const submitForm = (e) => {
        e.preventDefault();

        dispatch(addLiveChat({
            'first_name': 'Mayank',
            'last_name': 'Jain',
            'message': liveChatMessage
        }));

        setLiveChatMessage("");
    };

    return (
        <div>
            <div className="flex flex-col-reverse gap-y-3 py-1 h-[425px] overflow-y-scroll">
                {LiveChatMessages && LiveChatMessages.map(chatMessage => <LiveChatMessage key={chatMessage.id} chatMessage={chatMessage} />)}
            </div>
            <form onSubmit={submitForm} className="flex gap-x-2 px-2 pt-2">
                <input type="text" value={liveChatMessage} onChange={(e) => setLiveChatMessage(e.target.value)} className="w-full px-1 py-1 rounded-full outline outline-1 ps-3 text-sm" placeholder="Chat..." />
                <button type="submit" className="bg-cyan-600 text-white rounded-xl px-5 text-sm">Send</button>
            </form>
        </div>
    )
}

export default LiveChatMessagesList;