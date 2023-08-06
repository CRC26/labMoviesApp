import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import StarRate from "@mui/icons-material/StarRate";
import CakeIcon from '@mui/icons-material/Cake';

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

const PersonDetails =  ({ person }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return<>

    <Typography variant="h6" component="p">
        {person.biography}
    </Typography> 

    <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<CakeIcon />} label={`BirthDate: ${person.birthday}`} />
        <Chip
          icon={<WorkOutlineIcon />}
          label={`${person.known_for_department.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`Popularity: ${person.popularity}`}
        />
      </Paper>
  </>
};
export default PersonDetails;