import { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
    const [popularVideos, setPopularVideos] = useState([]);

    useEffect(() => {
        getPopularVideos();
    }, []);

    const getPopularVideos = async () => {
        const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API_URL);
        const json = await data.json();

        setPopularVideos(json.items);
    };

    return (
        <div className="flex flex-wrap gap-x-6 gap-y-20 mt-8">
            {popularVideos.map(video => <Link to={'/watch?v=' + video.id} key={video.id}><VideoCard videoInfo={video} /></Link>)}
        </div>
    )
}

export default VideoContainer;