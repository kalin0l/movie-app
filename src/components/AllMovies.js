import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieSliceActions } from "../store/movie-slice";
import { addToFav, removeMov } from "../store/action";
import RemoveButton from "./RemoveButton";
import AddButton from "./AddButton";
import React from "react";

const AllMovies = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const movies = useSelector((state) => state.movies.movies);
  const _id = useSelector((state) => state.movies._id);
  const id = useSelector((state) => state.movies.id);

  const remove = (_id, id) => {
    dispatch(removeMov(_id));
    dispatch(movieSliceActions.removeId(id));
  };

  const toMovies = (id) => {
    history(`/movies/${id}`);
  };
  return (
    <div className="all-movies">
      {movies &&
        movies.map((mov, i) => {
          return (
            <React.Fragment>
              {mov.show.image && (
                <div className="movies-container" key={mov.show.id}>
                  <img
                    src={mov.show.image.original}
                    onClick={() => toMovies(mov.show.id)}
                    alt="movies"
                  />

                  <div className="movie-details">
                    <h3 onClick={() => toMovies(mov.show.id)}>
                      {mov.show.name}
                    </h3>
                    <p>
                      <span>
                        {mov.show.genres[0]}, {mov.show.genres[1]}
                      </span>
                      {mov.show.runtime && (
                        <span>|{mov.show.runtime} minutes</span>
                      )}
                    </p>
                    <p className="desc">{mov.show.summary}</p>
                    <a href={mov.show.url}>Official Site</a>
                    {id.includes(movies[i].show.id) ? (
                      <RemoveButton
                        _id={_id}
                        id={mov.show.id}
                        remove={remove}
                      />
                    ) : (
                      <AddButton
                        addToFav={addToFav}
                        id={mov.show.id}
                        name={mov.show.name}
                        image={mov.show.image}
                        genre={mov.show.genres}
                        runtime={mov.show.runtime}
                        summary={mov.show.summary}
                      />
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default AllMovies;
