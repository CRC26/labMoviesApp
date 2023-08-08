import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import TvReviews from '../tvReviews'

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TvDetails = ( {tv}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tv.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="seasons" sx={styles.chipLabel} color="primary" />
        </li>
        {tv.seasons.map((s) => (
          <li key={s.name}>
            <Chip label={s.name}  />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="genres" sx={styles.chipLabel} color="primary" />
        </li>
        {tv.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>
   
      <Paper component="ul" sx={styles.chipSet}>
         <li>
           <Chip label="Production Countries" sx={styles.chipLabel} color="primary" />
         </li>
         {tv.production_countries.map((c) => (
           <li key={c.name}>
             <Chip label={c.name}  />
           </li>
         ))}
      </Paper>
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TvReviews tv={tv} />
      </Drawer>
    </>
  );
};
export default  TvDetails ;