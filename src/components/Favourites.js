import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {removeMov} from '../store/action'




const Favourites = () => {

    const history = useNavigate();
    const dispatch = useDispatch();

    
    const favMovies = useSelector((state) => state.movies.favMovies);

    const deleteFavMovie = (id) => {
      dispatch(removeMov(id));
      window.location.reload();
    }

    return  <section className="favourites">
    <h1>Your Favourites</h1>
    <div className="fav-movs">
      {favMovies && favMovies.favMovies && favMovies.favMovies.slice(0,5).map(mov => {
        return <div key={mov._id}>
          <img
          src={mov.img}
          alt="movie"
          onClick={() => history(`/movies/${mov.id}`)}
        />
        <button type="button" onClick={() => deleteFavMovie(mov._id)}>X</button>
        <h4>{mov.title}</h4>
        </div>
      })}
    </div>
  </section>
}

export default Favourites;