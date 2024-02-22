/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeMiniSideBar, removeSideBar, toggleMiniSideBar } from "../utils/store/slices/toggleSidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import COMMENTS_MOCK_DATA from "../utils/Mock Data/commentsMockData.json"
import LiveChat from "./LiveChat";

const WatchVideoPage = () => {
    const [params] = useSearchParams();
    const videoId = params.get('v');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(removeSideBar());
        dispatch(removeMiniSideBar());

        return () => {
            dispatch(toggleMiniSideBar());
        }
    }, []);

    return (
        <div className="flex gap-x-2 relative top-[65px] ps-8 pe-4 z-10">
            <div>
                <iframe className="rounded-xl" width="830" height="467" src={`https://www.youtube.com/embed/${videoId}?si=qIJrU6IaNucCe1G6`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="ps-1 py-4">
                    <h1 className="text-2xl font-bold">Comments</h1>
                    <div className="bg-slate-200 px-2 py-1">
                        <CommentList comments={COMMENTS_MOCK_DATA} />
                    </div>
                </div>
            </div>
            <div className="w-[463px] px-2">
                <LiveChat />
            </div>
        </div>
    )
}

export default WatchVideoPage;