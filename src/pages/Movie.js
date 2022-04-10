import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createComm, createRate, getRate, removeComment, removeRate } from "../store/action";
import { removeMov, addToFav } from "../store/action";
import "./Movie.css";
import { reviewSliceActions } from "../store/review-slice";
import { movieSliceActions } from "../store/movie-slice";
import Footer from "../components/Footer";
import SingleMovie from "../components/SingleMovie";
import Review from "../components/Review";
import YourReview from "../components/YourReview";
import Comments from "../components/Comments";
import ErrorModal from "../components/ErrorModal";

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const _id = useSelector((state) => state.movies._id);
  const createdRate = useSelector((state) => state.review.createdRate);
  const rateId = useSelector((state) => state.review.rateId);
  console.log(rateId)

  const remove = (_id,id) => {
    dispatch(removeMov(_id));
    dispatch(movieSliceActions.removeId(id))
  }
  
  const comments = useSelector((state) => state.review.comments);
  const error = useSelector((state) => state.movies.error);
  const comment = useSelector((state) => state.review.comment);
  const getRating = useSelector((state) => state.review.getRate);
 
  
  useEffect(() => {
    dispatch(getRate(_id));
  }, [dispatch, _id,createdRate,getRating,rateId]);

  const removeComments = (id) => {
    dispatch(removeComment(id));
    const newComments = comments.filter((com) => com._id !== id);
    dispatch(reviewSliceActions.setComments(newComments));
  };
  const displayCom = (comment, _id) => {
    dispatch(createComm(comment, _id));
    dispatch(reviewSliceActions.setComment(''));
  };

 
  return (
    <React.Fragment>
 {error && <ErrorModal/>}
      <Link to='/' className="button">Back</Link>
    <section className="container">
      <SingleMovie remove={remove} addToFav={addToFav} id={id} />
      <Review removeRate={removeRate} getRate={getRate}/>
      <YourReview createRate={createRate}/>
      <Comments removeComments={removeComments}/>
      
      <textarea
        rows="4"
        cols="50"
        value={comment}
        onChange={(e) =>
          dispatch(reviewSliceActions.setComment(e.target.value))
        }
        placeholder="Your private notes and comments about the movie.."
      />
      <button type="button" onClick={() => displayCom(comment, _id)}>
        Submit
      </button>
    </section>
    <Footer/>
    </React.Fragment>
  );
};

export default Movie;
