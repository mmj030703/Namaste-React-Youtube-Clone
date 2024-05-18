import LiveChatMessagesList from "./LiveChatMessagesList";

const LiveChat = () => {
    return (
        <div className="mt-10 lg:mt-0 bg-slate-300 rounded-xl pb-2">
            <h1 className="text-2xl font-bold py-1 px-2 w-full border-b-[1px] border-black">Live Chat</h1>
            <LiveChatMessagesList />
        </div>
    )
}

export default LiveChat;