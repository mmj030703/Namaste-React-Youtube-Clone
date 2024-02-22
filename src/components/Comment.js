const Comment = ({ userComment }) => {
    const { name, imageURL, comment } = userComment;
    return (
        <div>
            <div className="flex items-center gap-x-2 ps-2 my-1 py-3 rounded-md bg-slate-100">
                <img src={imageURL} className="w-12 h-12 object-cover rounded-full" alt="name" />
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-[15px]">{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;