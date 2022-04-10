import { useDispatch,useSelector } from "react-redux";
import { reviewSliceActions } from "../store/review-slice";



const YourReview = ({createRate}) => {
  
    const rate = useSelector((state) => state.review.rate);
    const _id = useSelector((state) => state.movies._id);
    const dispatch = useDispatch();

    
    return <div className="your-review">
    <div className="review-heading">
      <h4>Your Review</h4>
    </div>
    <div className="review-inputs">
    <input type="number" value={rate} onChange={(e) => dispatch(reviewSliceActions.setInputRate(e.target.value))} placeholder="Enter from 1 to 10" />
    <button type="button" onClick={() => dispatch(createRate(rate,_id))}>Review</button>

    </div>
  </div>
}

export default YourReview;