/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import COMMENTS_MOCK_DATA from "../utils/Mock Data/commentsMockData.json"
import LiveChat from "./LiveChat";
import { YOUTUBE_CHANNEL_API, YOUTUBE_VIDEO_API } from "../utils/constants";
import { useEffect, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import RecommendedVideos from "./RecommendedVideos";

const WatchVideoPage = () => {
    const [videoInfo, setVideoInfo] = useState(null);
    const [channelInfo, setChannelInfo] = useState(null);
    const [videoIdAfterLoad, setVideoIdAfterLoad] = useState(null);
    const [params] = useSearchParams();
    const videoId = params.get('v');
    const videoSnippet = videoInfo?.snippet;
    const channelSnippet = channelInfo?.snippet;
    
    useEffect(() => {
        fetchVideoInfo();
    }, [params]);

    async function fetchVideoInfo() {
        const res = await fetch(YOUTUBE_VIDEO_API(videoId));
        const jsonRes = await res.json();

        fetchChannelInfo(jsonRes);

        setVideoInfo(jsonRes?.items[0]);
    }

    async function fetchChannelInfo(videoInfoResponse) {
        const res = await fetch(YOUTUBE_CHANNEL_API(videoInfoResponse?.items[0]?.snippet?.channelId));
        const jsonRes = await res.json();

        setChannelInfo(jsonRes?.items[0]);
    }

    return (videoInfo && channelInfo) && (
        <div className="w-full relative top-[65px] px-5 sm:px-10 lg:px-0 lg:ps-8 z-10">
            <div className="flex flex-col lg:flex-row gap-x-2">
                <section className="ps-1 pb-4">
                    <iframe className="rounded-xl w-full" height="467" src={`https://www.youtube.com/embed/${videoId}?si=qIJrU6IaNucCe1G6`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <section>
                        <section>
                            <div className="mt-5">
                                <h1 className="font-semibold text-[1.29rem]">{`${videoSnippet?.title}`}</h1>
                                <div className="mt-3 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 items-start sm:items-center gap-x-3 justify-between">
                                    <div className="flex gap-x-2 items-center">
                                        <img src={`${channelSnippet?.thumbnails?.default?.url}`} className="w-14 rounded-full shadow-xl border-2 border-stone-200" />
                                        <h3>{`${channelSnippet?.title}`}</h3>
                                        <Button name={"Subscribe"} />
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        <div className="bg-stone-200 py-2 px-4 flex gap-x-2 w-fit rounded-3xl">
                                            <FontAwesomeIcon icon={faThumbsUp} className="cursor-pointer hover:text-stone-700 text-stone-500 text-2xl border-r-2 border-stone-500 pe-3" />
                                            <FontAwesomeIcon icon={faThumbsDown} className="cursor-pointer hover:text-stone-700 text-stone-500 text-2xl" />
                                        </div>
                                        <Button name={"Watch Later"} />
                                    </div>
                                </div>
                                <div className="overflow-hidden mt-5 sm:mt-3 bg-stone-800 rounded-xl text-white px-3 pt-3 pb-5">
                                    <div>
                                        <span>{`${videoSnippet?.publishedAt?.split('T')[0]}`}</span>
                                    </div>
                                    <div className="mt-2">
                                        <p className="max-w-[830px]">{`${videoSnippet?.description}`}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mt-5">
                            <h1 className="text-2xl font-bold">Comments</h1>
                            <div className="overflow-hidden bg-slate-200 px-2 py-1 mt-3">
                                <CommentList comments={COMMENTS_MOCK_DATA} />
                            </div>
                        </section>
                    </section>
                </section>
                <div className="lg:w-[463px] px-2">
                    <aside>
                        <LiveChat videoId={videoInfo?.id} />
                        <RecommendedVideos query={`${videoSnippet?.title}`} setVideoIdAfterLoad={setVideoIdAfterLoad} />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default WatchVideoPage;