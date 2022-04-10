import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const Favourites = () => {

    const history = useNavigate();

    

    const favMovies = useSelector((state) => state.movies.favMovies);

    return  <section className="favourites">
    <h1>Your Favourites</h1>
    <div className="fav-movs">
      {favMovies && favMovies.favMovies && favMovies.favMovies.slice(0,5).map(mov => {
        return <div key={mov._id} onClick={() => history(`/movies/${mov.id}`)}>
          <img
          src={mov.img}
          alt="movie"
        />
        <h4>{mov.title}</h4>
        </div>
      })}
    </div>
  </section>
}

export default Favourites;