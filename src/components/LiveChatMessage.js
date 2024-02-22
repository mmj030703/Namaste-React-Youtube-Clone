import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LiveChatMessage = ({ chatMessage }) => {
    const { first_name, last_name, avatar, message } = chatMessage;
    return (
        <div className="flex items-center gap-x-3 ps-2 py-1 shadow-lg">
            {avatar ? <img className="w-12 rounded-full bg-black" src={avatar} alt="Profile" /> : <FontAwesomeIcon className='text-4xl mr-1 border border-slate-700 rounded-full px-1 py-1' icon={faFaceSmile} />}
            <div className="flex gap-x-3">
                <h3 className="text-sm pe-3">
                    <span className="font-bold text-sm mr-2">{first_name} {last_name}</span>
                    {message ? message : "This is a chat by me in the live chat. This is a chat by me in the live chat"}
                </h3>
            </div>
        </div>
    )
}

export default LiveChatMessage;