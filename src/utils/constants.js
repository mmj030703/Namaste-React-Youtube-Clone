const YOUTUBE_API_KEY = 'AIzaSyAXmDZtGOANP4l7rWr1KrhPpG6IScsn2yU';

export const YOUTUBE_POPULAR_VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_VIDEOS_API_URL = (query) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SUGGESTIONS_API_URL = 'https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=';

export const RANDOM_USER_GENERATOR_API_URL = 'https://random-data-api.com/api/v2/users?size=';

export const LIVE_CHATS_MAX_LENGTH = 10;