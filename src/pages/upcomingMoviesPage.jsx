import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcoming } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const UpcomingMovies = (props) => {
    const [searchText, setSearchText] =useState("");
    const { data, error, isLoading, isError } = useQuery("upcoming", getUpcoming);
 
    if (isLoading) {
     return <Spinner />;
    }
    if (isError) {
     return <h1>{error.message}</h1>;
    }
    const movies = data ? data.results : [];
 
    return (
        <PageTemplate
          title="Upcoming Movies"
          movies={movies}
          action={(movie) => {
          }}
        />
    );
};  
 export default UpcomingMovies;
