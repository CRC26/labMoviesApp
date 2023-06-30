import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import UpcomingMovies from "../components/upcomingMovies";

const UpcomingMoviesPage =  ({ props }) => {
    const { state : {movie, release_date } } = useLocation()
  return (
    <PageTemplate movie={movie}>
      <MovieReview release={release_date} />
    </PageTemplate>
  );
};

export default UpcomingMoviesPage;
