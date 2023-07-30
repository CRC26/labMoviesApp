import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTopRated } from "../api/tmdb-api";


const TopRatedMoviesPage = (props) => {
  const [searchText, setSearchText] =useState("");
  const { data, error, isLoading, isError } = useQuery("topRated", getTopRated);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
    const movies = data ? data.results : [];


    return (
        <PageTemplate
          title="Top Rated"
          movies={movies}
          action={(movie) => {
          }}
        />
    );
};  
export default TopRatedMoviesPage;

