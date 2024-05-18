import { useEffect, useRef } from "react";

function SearchResultItem({ video }) {
    const { thumbnails, title, publishTime, channelTitle, description } = video?.snippet;
    const videoTextContainerRef = useRef(null);
    let prevWidth = window.innerWidth; 

    useEffect(() => {
        truncateText();
        window.addEventListener('resize', truncateText);

        return () => {
            window.removeEventListener('resize', truncateText);
        }
    }, []);

    const decodeHTMLEntities = (string) => {
        const elem = document.createElement('textarea');
        elem.innerHTML = string;
        return elem.value;
    };

    function truncateText() {
        let currWidth = window.innerWidth; 
        const container = videoTextContainerRef.current;
        const availableWidth = container.offsetWidth; // Get available width of container

        let text = container.textContent;
        let maxLength = text.length;

        // Loop until the text fits within the container width
        while (container.scrollWidth > availableWidth) {
            maxLength--;
            text = text.slice(0, maxLength) + '...';
            container.textContent = text;
        }

        // When the Window Size is increasing at that moment gaining the characters back. 
        if (currWidth > prevWidth) {
            maxLength++;
            text = title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
            container.textContent = text;
        }

        prevWidth = currWidth;
    }

    return (
    <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-3 md:w-fit cursor-pointer">
            <div>
                <img className={`w-full md:w-[335px] rounded-xl`} src={`${thumbnails?.medium?.url}`} alt="thumbnail" />
            </div>
            <div className="overflow-hidden">
                <div ref={videoTextContainerRef} title={decodeHTMLEntities(title)} className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium text-[15px] sm:text-[19px]">
                    {decodeHTMLEntities(title)}
                </div>
                <div className="flex gap-x-2">
                    <p className="text-[12.5px] text-slate-600">{publishTime.slice(0, 10)}</p>
                </div>
                <p className="text-[13px] text-slate-600 mt-2">{channelTitle}</p>
                <p title="Description" className="hidden md:block text-[13px] text-slate-600 mt-2">{description.length <= 100 ? description : description.slice(0, 100) + "..."}</p>
            </div>
        </div>
    )
}

export default SearchResultItem;