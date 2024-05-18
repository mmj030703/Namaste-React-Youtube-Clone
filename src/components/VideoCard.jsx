const VideoCard = ({ videoInfo }) => {
    const { title, channelTitle, publishedAt } = videoInfo.snippet;
    const { url: imageUrl } = videoInfo.snippet.thumbnails.medium;
    const { viewCount } = videoInfo.statistics;

    const getEditedViews = (viewCount) => {
        const numbers = {
            'thousand': 1000,
            'million': 1000000,
            'billion': 1000000000,
        }

        if (viewCount < 1000) return `${viewCount}`;
        else if (viewCount < (numbers.thousand * 1000)) {
            const views = Number.parseInt(viewCount / numbers.thousand);
            return checkAfterPrecisionZero(views.toString()) ? `${Number.parseInt(views)}K` : `${views}K`;
        }
        else if (viewCount < (numbers.thousand * 1000 * 1000)) {
            const views = (viewCount / numbers.million).toPrecision(2);
            return checkAfterPrecisionZero(views.toString()) ? `${Number.parseInt(views)}M` : `${views}M`;
        }
        else if (viewCount < (numbers.thousand * 1000 * 1000 * 1000)) {
            const views = (viewCount / numbers.billion).toPrecision(2);
            return checkAfterPrecisionZero(views.toString()) ? `${Number.parseInt(views)}B` : `${views}B`;
        }
    };

    const checkAfterPrecisionZero = (views) => {
        if (views.charAt(views.length - 1) === '0' && views.charAt(views.length - 2) === '.') return true;
        else return false;
    };

    const getEditedPublishedDate = (publishedAt) => {
        const months = {
            '01': 'January',
            '02': 'February',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December'
        };

        const editedPublishedDate = publishedAt.split('T')[0];
        const splitDate = editedPublishedDate.split('-');
        const year = splitDate[0];
        const month = splitDate[1];
        const date = splitDate[2];

        return `${date} ${months[month]} ${year}`;
    };

    return (
        <div className="w-full md:w-fit cursor-pointer">
            <div>
                <img className={`w-full md:w-[400px] rounded-xl`} src={imageUrl} alt="thumbnail" />
            </div>
            <div className="hidden md:block mt-2">
                <h3 title={title} className="max-w-[320px] font-semibold text-[15px]">{title.length <= 75 ? title : title.slice(0, 75) + "..."}</h3>
                <p className="text-sm text-slate-600 mt-1">{channelTitle.length <= 40 ? channelTitle : channelTitle.slice(0,40) + "..."}</p>
                <div className="flex gap-x-2">
                    <p className="text-sm text-slate-600 mt-1">{getEditedViews(viewCount)} views</p>
                    <p className="text-sm text-slate-600 mt-1">{getEditedPublishedDate(publishedAt)}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;