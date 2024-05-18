import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_VIDEOS_API_URL } from '../utils/constants';
import RecommendedVideoItem from './RecommendedVideoItem';
import { Link, useSearchParams } from 'react-router-dom';

function RecommendedVideos({ query, setVideoIdAfterLoad }) {
    const [recommendedVideos, setRecommendedVideos] = useState(null);
    const [params] = useSearchParams();

    useEffect(() => {
        fetchRecommendedVideos();
    }, [params]);

    async function fetchRecommendedVideos() {
        const res = await fetch(YOUTUBE_SEARCH_VIDEOS_API_URL(query));
        const jsonRes = await res.json();

        setRecommendedVideos(jsonRes?.items);
    }

    return recommendedVideos ? (
        <div className='mt-12 lg:mt-8 text-xl'>
            {recommendedVideos?.map(recommendedVideo => {
                return (
                    <Link to={`/watch?v=` + recommendedVideo?.id?.videoId} key={recommendedVideo?.id?.videoId}>
                        <RecommendedVideoItem video={recommendedVideo} />
                    </Link>
                    // return <RecommendedVideoItem onClick={() => console.log("hello world")} video={recommendedVideo} />
                )
            })}
        </div>
    ) : null;
}

export default RecommendedVideos;