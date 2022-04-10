import { movieSliceActions } from "./movie-slice";
import { reviewSliceActions } from "./review-slice";

export const getFilteredRes = (mov) => {
  return async (dispatch) => {
    try {
      dispatch(movieSliceActions.setLoading());
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${mov}`);
      const data = await res.json();
      dispatch(movieSliceActions.setLoading());
      dispatch(movieSliceActions.setMovies(data));
    } catch (err) {
      dispatch(movieSliceActions.setLoading());
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};

export const lookUpMov = (id) => {
  return async (dispatch) => {
    try {
      dispatch(movieSliceActions.setLoading());
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await res.json();
      dispatch(movieSliceActions.setLoading());
      dispatch(movieSliceActions.setMovie(data));
    } catch (err) {
      dispatch(movieSliceActions.setLoading());
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};
export const addToFav = (id, title, img, genre, runtime, summary) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/api/movies/favourites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          img,
          genre,
          runtime,
          summary,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      dispatch(movieSliceActions.setId(data.movie.id));
      dispatch(movieSliceActions.set_id(data.movie._id));
    } catch (err) {
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};
export const removeMov = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/movies/favourites/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};

export const getAllFavMovies = () => {
  return async (dispatch) => {
    try {
      dispatch(movieSliceActions.setLoading());
      const res = await fetch(`http://localhost:5000/api/movies/favourites`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      dispatch(movieSliceActions.setLoading());
      dispatch(movieSliceActions.setFavMovies(data));
    } catch (err) {
      dispatch(movieSliceActions.setLoading());
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};

export const createComm = (comment, creator) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/api/movies/notes`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          comment,
          creator,
        }),
      });
      const data = await res.json();
      dispatch(reviewSliceActions.setNewComment(data));
    } catch (err) {
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};
export const getComm = (id) => {
  return async (dispatch) => {
    try {
      dispatch(movieSliceActions.setLoading());

      const res = await fetch(`http://localhost:5000/api/movies/notes/${id}`);
      const data = await res.json();
      dispatch(movieSliceActions.setLoading());

      dispatch(reviewSliceActions.setComments(data.comments));
    } catch (err) {
      dispatch(movieSliceActions.setLoading());
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};

export const removeComment = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/api/movies/notes/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};

export const createRate = (rate,creator) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/api/movies/ratings`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          rate,
          creator
        })
      });
      const data = await res.json();
      dispatch(reviewSliceActions.setCreatedRate(data.rating.rate));
    } catch (err) {
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
};

export const getRate = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/api/movies/ratings/${id}`);
      const data = await res.json();
      dispatch(reviewSliceActions.setRateId(data.rate[0]._id))
      dispatch(reviewSliceActions.getRating(data.rate[0].rate));
    } catch (err) {
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  };
}
export const removeRate = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/api/movies/ratings/${id}`,{method:'DELETE'});
      const data = await res.json();
      console.log(data);
      dispatch(reviewSliceActions.setRateId(''))
    }catch(err){
      dispatch(movieSliceActions.setError())
      console.log(err);
    }
  }
}
