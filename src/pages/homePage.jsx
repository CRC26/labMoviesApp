import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoriteIcon from '../components/cardIcons/addToFavorite'


 const HomePage = (props) => {
   const [searchText, setSearchText] =useState("");
   const { data, error, isLoading, isError } = useQuery("discover", getMovies);

   if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
    const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoriteIcon movie={movie} />
      }}
    />
  );
};
export default HomePage;

