import { useDispatch } from "react-redux"
import { movieSliceActions } from "../store/movie-slice";

const Search = ({submitHandler,search}) => {
    const dispatch = useDispatch();
    return <div className="search">
    <h1>Search</h1>
    <form onSubmit={submitHandler}>
      <input
        placeholder="search by movie title"
        type="text"
        value={search}
        onChange={(e) =>
          dispatch(movieSliceActions.setSearch(e.target.value))
        }
        />
      <button type="submit">Search</button>
    </form>
  </div>
}
export default Search