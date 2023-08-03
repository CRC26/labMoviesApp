import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


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

const PersonDetails = ({person}) => {

  return (
    <>
    <Typography variant="h4" component="p">
        {person.name}
      </Typography>

      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="KnownAs" sx={styles.chipLabel} color="primary" />
        </li>
        {person.also_known_as.map((g) => (
          <li key={e.name}>
            <Chip label={e.name}  />
          </li>
        ))}
      </Paper>
      </>
  );
};
export default  PersonDetails ;