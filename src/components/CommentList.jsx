import Comment from "./Comment";

let commentCounterId = 1;

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map(comment =>
                <div key={commentCounterId++} className="bg-slate-300 mt-2">
                    <Comment userComment={comment} />
                    <div className="ps-8 border-s-slate-500 border-2">
                        {/* Calling this CommentList again inside CommentList -> Recursion (Here we use recursive approach) */}
                        <CommentList comments={comment.replies} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CommentList;