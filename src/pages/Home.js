import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import "./Home.css";
import ErrorModal from "../components/ErrorModal";
import Hero from "../components/Hero";
import Favourites from "../components/Favourites";
import { getAllFavMovies } from "../store/action";
import { useEffect } from "react";



const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFavMovies());
},[dispatch])

  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  if(loading){
    return <div className="loading"></div>
  }
  
  return (
    <>
    {error && <ErrorModal/>}
     <Hero/>
     <Favourites/>
      <Footer/>
    </>
  );
};

export default Home;
