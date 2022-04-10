import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComm } from "../store/action";

const Comments = ({removeComments}) => {
    const comments = useSelector((state) => state.review.comments);
  const newComment = useSelector((state) => state.review.newComment);
    const _id = useSelector((state) => state.movies._id);
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(getComm(_id));
      }, [dispatch, _id, newComment]);

    return <div className="comments-section">
    {comments &&
      comments.length > 0 &&
      comments.map((com) => {
        return (
          <div className="comment" key={com._id}>
            <div className="comment-header">
              <button type="button" onClick={() => removeComments(com._id)}>
                X
              </button>
            </div>
            <p>{com.comment}</p>
          </div>
        );
      })}
  </div>
}

export default Comments;