import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )  // NEW
  const [favorites, setFavorites] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToFavorites = (tv) => {
    let updatedFavorites = [...favorites];
    if (!favorites.includes(tv.id)) {
      updatedFavorites.push(tv.id);
    } 
    setFavorites(updatedFavorites);
  };

  const removeFromFavorites = (tv) => {
    setFavorites(favorites.filter((tId) => tId !== tv.id));
  };

  const addReview = (tv, review) => {   // NEW
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

  const addToPlaylist = (tv) => {
    let updatedPlaylist = [...playlist];
    if (!playlist.includes(tv.id)) {
      updatedPlaylist.push(tv.id);
    } 
    setPlaylist(updatedPlaylist);
  };

  return (
    <TvContext.Provider
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
    </TvContext.Provider>
  );
};

export default TvContextProvider;