import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )  // NEW
  const [favorites, setFavorites] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToFavorites = (movie) => {
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

  const addToPlaylist = (movie) => {
    let updatedPlaylist = [...playlist];
    if (!playlist.includes(movie.id)) {
      updatedPlaylist.push(movie.id);
    } 
    setPlaylist(updatedPlaylist);
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        playlist,
        addToPlaylist,
        addReview,    
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;