import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )  // NEW
  const [favorites, setFavorites] = useState([]);

  const addToFavorite = (movie) => {
    let updatedFavorites = [...favorites];
    if (!favorites.includes(movie.id)) {
      updatedFavorites.push(movie.id);
    } 
    setFavorites(updatedFavorites);
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorite,
        removeFromFavorites,
        addReview,    // NEW
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;