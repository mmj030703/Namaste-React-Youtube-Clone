const Comment = ({ userComment }) => {
    const { name, imageURL, comment } = userComment;
    return (
        <div>
            <div className="flex items-center gap-x-2 ps-2 my-1 py-3 rounded-md bg-slate-100">
                <img src={imageURL} className="w-6 h-6 sm:w-12 sm:h-12 object-cover rounded-full" alt="name" />
                <div>
                    <h3 className="text-[12px] sm:text-base font-semibold">{name}</h3>
                    <p className="text-[11px] sm:text-[15px]">{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;