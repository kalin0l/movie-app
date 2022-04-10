import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import ErrorModal from "../components/ErrorModal";
import {
  getAllFavMovies,
  getFilteredRes,
} from "../store/action";
import "./SearchPage.css";
import Search from "../components/Search";
import AllMovies from "../components/AllMovies";
import { movieSliceActions } from "../store/movie-slice";

const SearchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFavMovies());
  }, [dispatch]);

  const search = useSelector((state) => state.movies.search);
  
  
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(getFilteredRes(search));
    dispatch(movieSliceActions.setSearch(''))
  };
  


  if(loading){
    return <div className="loading"></div>
  }
  
  return (
    <React.Fragment>
       {error && <ErrorModal/>}
    <section className="section">
      <Search search={search} submitHandler={submitHandler}/>
      <AllMovies/>
    </section>

    </React.Fragment>
  );
};
export default SearchPage;
