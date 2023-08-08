import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { getTvGenres } from "../../api/tmdb-api";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

export default function FilterCard(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getTvGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleUserImput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleUserImput(e, "title", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleUserImput(e, "genre", e.target.value);
  };

  const handleFirstAirDateBeforeChange = (e) => {
    handleUserImput(e, "first_air_before", e.target.value);
  } ;
  const handlefirstAirDateAfterChange = (e) => {
    handleUserImput(e, "first_air_after", e.target.value);
  
  };

  return (

    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter TV Shows.
        </Typography>
        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
        <TextField
          sx={styles.formControl}
          id="firstAirBefore"
          label="Aired Before"
          type="date"
          value={props.firstAirDateBeforeChangeFilter}
          variant="filled"
          onChange={handleFirstAirDateBeforeChange}
        />
        <TextField
          sx={styles.formControl}
          id="firstAirAfter"
          label="Aired After"
          type="date"
          value={props.firstAirDateAfterChange}
          variant="filled"
          onChange={handlefirstAirDateAfterChange}
        />
        <FormControl sx={styles.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
    <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort TV shows.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}