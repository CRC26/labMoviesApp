import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoriteIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavorite(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoriteIcon;