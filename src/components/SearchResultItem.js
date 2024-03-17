function SearchResultItem({ video }) {
    const { thumbnails, title, publishTime, channelTitle, description } = video?.snippet;
    const decodeHTMLEntities = (string) => {
        const elem = document.createElement('textarea');
        elem.innerHTML = string;
        console.log(elem.value);
        return elem.value;
    };

    return (
        <div className="flex gap-x-3 w-fit cursor-pointer">
            <div>
                <img className={`w-[335px] rounded-xl`} src={`${thumbnails?.medium?.url}`} alt="thumbnail" />
            </div>
            <div>
                <h3 title={decodeHTMLEntities(title)} className="font-medium text-[19px]">{decodeHTMLEntities(title).length <= 70 ? decodeHTMLEntities(title) : decodeHTMLEntities(title).slice(0, 70) + "..."}</h3>
                <div className="flex gap-x-2">
                    <p className="text-[12.5px] text-slate-600">{publishTime.slice(0, 10)}</p>
                </div>
                <p className="text-[13px] text-slate-600 mt-2">{channelTitle}</p>
                <p title="Description" className="text-[13px] text-slate-600 mt-2">{description.length <= 100 ? description : description.slice(0, 100) + "..."}</p>
            </div>
        </div>
    )
}

export default SearchResultItem;