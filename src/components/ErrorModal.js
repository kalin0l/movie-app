import { useDispatch,useSelector } from "react-redux";
import { movieSliceActions } from "../store/movie-slice";

const ErrorModal = () => {
    const dispatch = useDispatch();
    const msg = useSelector(state => state.movies.msg)
    
  return (
    <section className="error-section">
      <div className="error-header">
        <button type="button" onClick={() => dispatch(movieSliceActions.setError())}>X</button>
      </div>
      <h3 className="error-msg">{msg ? msg : "Something went wrong"}</h3>
      <button type="button" onClick={() => dispatch(movieSliceActions.setError())}>Close</button>
    </section>
  );
};

export default ErrorModal;
