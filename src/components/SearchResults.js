/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import SearchResultItem from './SearchResultItem';
import { YOUTUBE_SEARCH_VIDEOS_API_URL } from '../utils/constants';
import { Link, useLocation } from 'react-router-dom';

function SearchResults() {
    const [searchVideosList, setSearchVideosList] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search_query = searchParams.get('search_query');
    useEffect(() => {
        fetchSearchVideos();
    }, [location]);
    const fetchSearchVideos = async () => {
        const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API_URL(search_query));
        const json = await data.json();
        setSearchVideosList(json.items);
    };

    return (
        <div className="flex flex-col gap-y-4 pb-2 relative top-20 left-60 w-4/5">
            {searchVideosList?.filter(video => video.id.kind === 'youtube#video')?.map(video => <Link to={`/watch?v=${video.id.videoId}`}><SearchResultItem key={video?.id?.videoId} video={video} /></Link>)}
        </div>
    )
}

export default SearchResults;