import { useDispatch, useSelector } from "react-redux";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useEffect } from "react";

const Review = ({ removeRate, getRate }) => {
  const dispatch = useDispatch();
  const rateId = useSelector((state) => state.review.rateId);
  const getRating = useSelector((state) => state.review.getRate);
  const _id = useSelector((state) => state.movies._id);
  const createdRate = useSelector((state) => state.review.createdRate);

  useEffect(() => {
    dispatch(getRate(_id));
  }, [dispatch, _id, createdRate, getRating, rateId, getRate]);

  const stars =
    getRating &&
    getRating > 0 &&
    Array.from({ length: 5 }, (_, index) => {
      const number = index + 0.5;
      const tempStars = (
        <span>
          {getRating / 2 >= index + 1 ? (
            <BsStarFill />
          ) : getRating / 2 >= number ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
      );
      return tempStars;
    });

  return (
    <div className="review">
      <h1>Review of the movie</h1>
      {rateId && (
        <div className="review-details">
          <span>{stars}</span>
          <button type="button" onClick={() => dispatch(removeRate(rateId))}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Review;
