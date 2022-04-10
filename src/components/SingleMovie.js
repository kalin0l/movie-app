import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { lookUpMov } from "../store/action";
import { useParams } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import AddButton from "./AddButton";

const SingleMovie = ({ remove, addToFav, }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
  

    const itemId = useSelector((state) => state.movies.id);
    const _id = useSelector((state) => state.movies._id);
    
    
    useEffect(() => {
        dispatch(lookUpMov(id));
    }, [dispatch, id]);
    
    const movie = useSelector((state) => state.movies.selectedMov);
  console.log(movie.genres);
  return (
    <React.Fragment>
      {movie && (
        <div className="movie">
          {movie.image && <img src={movie.image.original} alt="movie" />}
          <div className="movie-details">
            <h3>{movie.name}</h3>
            <p>
              {movie.genres && (
                <span>
                  {movie.genres[0]}, {movie.genres[1]}
                </span>
              )}
              <span>|{movie.runtime} minutes</span>
            </p>
            <p>{movie.summary}</p>
            {itemId.includes(movie.id) ? (
              <RemoveButton _id={_id} id={id} remove={remove} />
            ) : (
              <AddButton
                addToFav={addToFav}
                id={movie.id}
                name={movie.name}
                image={movie.image}
                genre={movie.genres}
                runtime={movie.runtime}
                summary={movie.summary}
              />
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default SingleMovie;
