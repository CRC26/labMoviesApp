import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorite'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'


 const HomePage = (props) => {
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
        return (
        <>
          <AddToFavoritesIcon movie={movie} />
          <AddToPlaylistIcon movie={movie} />
        </>
        );         
      }}   
    />
  );
};
export default HomePage;

