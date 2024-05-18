/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateVideos } from "../utils/store/slices/homepageVideosSlice";

function VideoContainer() {
    const videos = useSelector(store => store.homepageVideos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularVideos();
    }, []);

    const getPopularVideos = async () => {
        const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API_URL);
        const json = await data.json();

        dispatch(updateVideos(json.items));
    };
    
    return (
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-5 gap-y-5 sm:gap-y-10 mt-8">
            {videos.length && videos?.map(video => <Link to={'/watch?v=' + video.id} key={video.id}><VideoCard videoInfo={video} /></Link>)}
        </div>
    )
}

export default VideoContainer;