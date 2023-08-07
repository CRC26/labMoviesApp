import Grid from "@mui/material/Grid";
import Header from "../tvHeader";
import React, { useState } from "react";
import FilterCard from "../filterTvCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import TvList from "../tvList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function TemplateTvList({ tv, title, action }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);

  let displayedTv = tv
    .filter((tv) => {
      return tv.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((tv) => {
      return genreId > 0 ? tv.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setTitleFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <TvList action={action} tv={displayedTv} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
        </Fab>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
        <FilterCard
            onUserInput={handleChange}
            titleFilter={titleFilter}
            genreFilter={genreFilter}
        />
      </Drawer>
    </>  
  );
}

export default TemplateTvList;