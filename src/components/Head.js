import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFaceSmile, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMiniSideBar, toggleSideBar } from '../utils/store/slices/toggleSidebarSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SUGGESTIONS_API_URL } from '../utils/constants';
import { addCache } from '../utils/store/slices/searchSuggestionCacheSlice';

let suggestionCounterId = 1;

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchQueryListOpen, setIsSearchQueryListOpen] = useState(false);
    const [suggestionList, setSuggestionList] = useState([]);
    const searchSuggestionsCache = useSelector(store => store.searchSuggestionsCache);

    useEffect(() => {
        //* Debounce Logic for improving the performance of app
        //* 1) If the two keystrokes made are < 200ms(assuming) then don't call the API -> Means user is typing fast and don't need suggestions  
        //* 2) If the two keystrokes made are > 200ms(assuming) then made the API call  -> Means user is typing slow and can wait for suggestions

        const apiCallingTimer = setTimeout(() => {
            //* Applying Caching Mechanism to improve performance and change the queries with results that are already searched by the user so that not any extra API call is made for those same searched query. 
            if (searchSuggestionsCache[searchQuery]) {
                setSuggestionList(searchSuggestionsCache[searchQuery]);
            }
            else {
                console.log(searchQuery);
                getSuggestions();
            }
        }, 200);

        const getSuggestions = async () => {
            const data = await fetch(YOUTUBE_SUGGESTIONS_API_URL + searchQuery);
            const json = await data.json();

            setSuggestionList(json[1]);
            dispatch(addCache({
                [searchQuery]: json[1]
            }));
        };

        return () => {
            clearTimeout(apiCallingTimer);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    const dispatch = useDispatch();

    const handleSidebarToggle = (e) => {
        dispatch(toggleSideBar());
        dispatch(toggleMiniSideBar());
    };

    return (
        <header className="w-fit relative bg-red-600">
            <div className='w-full flex items-center justify-between bg-white fixed top-0 z-20 px-8 pt-1 pb-2'>
                <div className='flex items-center gap-x-7'>
                    <FontAwesomeIcon onClick={handleSidebarToggle} className='cursor-pointer text-xl' icon={faBars} />
                    <a href="/"><img src='/assets/youtube-image.jpg' className='h-[25px]' alt='Youtube Icon' /></a>
                </div>
                <div className='flex'>
                    <div className='relative'>
                        <input
                            type='text'
                            placeholder='Search'
                            className='w-[550px] ps-5 pe-3 py-[7px] focus-within:outline-blue-600 border border-e-0 border-1 border-slate-400 rounded-s-full'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={(e) => setIsSearchQueryListOpen(true)}
                            onBlur={(e) => setIsSearchQueryListOpen(false)}
                        />
                        {isSearchQueryListOpen && <div className={`${suggestionList.length ? 'block' : 'none'} w-full absolute bg-white shadow-[0px_3px_4px_rgba(0,0,0,0.7)] rounded-lg mt-1`}>
                            <ul>
                                {suggestionList.map(suggestion => <li key={suggestionCounterId++} className='px-2 py-2'><FontAwesomeIcon className='text-slate-400 mr-3' icon={faSearch} /> {suggestion}</li>)}
                            </ul>
                        </div>}
                    </div>
                    <button className='px-6 py-[7px] bg-white border border-1 border-slate-400 rounded-e-full'><FontAwesomeIcon className='text-lg text-slate-600' icon={faSearch} /></button>

                </div>
                <div className=''>
                    <FontAwesomeIcon className='text-3xl border border-slate-700 rounded-full px-1 py-1' icon={faFaceSmile} />
                </div>
            </div>
        </header>
    );
};

export default Head;