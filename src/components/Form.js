import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFilteredRes } from "../store/action";
import { movieSliceActions } from "../store/movie-slice";

const Form = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector(state => state.movies.search);
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(getFilteredRes(search));
    history('/search');
    setTimeout(() => {
      dispatch(movieSliceActions.setSearch(''))

    },1000)
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Search by movie title" value={search} onChange={(e) => dispatch(movieSliceActions.setSearch(e.target.value))}/>
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};
export default Form;
