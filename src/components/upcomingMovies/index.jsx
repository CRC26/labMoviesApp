import React from "react";



const styles = {
  table: {
    minWidth: 550,
  },
};

const UpcomingMovies = (props) => {
    const { id } = useParams();
    const [movie] = useMovie(id);  // New
  
    return (
      <>
        {movie ? (
          <>
            <PageTemplate movie={movie}>
              <MovieDetails movie={movie} />
            </PageTemplate>
          </>
        ) : (
          <p>Waiting for movie details</p>
        )}
      </>
    );
  };
  

export default UpcomingMovies;