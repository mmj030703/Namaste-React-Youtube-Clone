import { useEffect, useState } from "react";

function RecommendedVideoItem({ video }) {
    const { thumbnails, title, publishTime, channelTitle } = video?.snippet;
    const [titleCharacterLimit, setTitleCharacterLimit] = useState(50);

    useEffect(() => {
        window.addEventListener('resize', setCharacterLimit);

        return () => {
            window.removeEventListener('resize', setCharacterLimit);
        }
    }, []);


    function setCharacterLimit() {
        if (window.innerWidth > 1025) setTitleCharacterLimit(50);
        else if (window.innerWidth >= 768 && window.innerWidth < 1025) setTitleCharacterLimit(100);
        else if (window.innerWidth >= 640 && window.innerWidth < 768) setTitleCharacterLimit(70);
        else if (window.innerWidth < 640) setTitleCharacterLimit(60);
    }


    const decodeHTMLEntities = (string) => {
        const elem = document.createElement('textarea');
        elem.innerHTML = string;
        return elem.value;
    };

    return (
        <div className="w-full flex flex-col sm:flex-row mt-4 gap-x-3 cursor-pointer">
            <img className={`w-full sm:w-[200px] sm:h-[110px] rounded-xl`} src={`${thumbnails?.medium?.url}`} alt="thumbnail" />
            <div>
                <h3 title={decodeHTMLEntities(title)} className="font-medium text-[16px]">{decodeHTMLEntities(title).length <= titleCharacterLimit ? decodeHTMLEntities(title) : decodeHTMLEntities(title).slice(0, (titleCharacterLimit-30)) + "..."}</h3>
                <div className="flex gap-x-2">
                    <p className="text-[12.5px] text-slate-600">{publishTime.slice(0, 10)}</p>
                </div>
                <p className="text-[13px] text-slate-600">{channelTitle.length <= 28 ? channelTitle : channelTitle.slice(0, 28) + "..."}</p>
            </div>
        </div>
    )
}

export default RecommendedVideoItem;