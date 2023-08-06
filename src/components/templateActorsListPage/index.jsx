import React from "react";
import title from "../personCard";
import Grid from "@mui/material/Grid";
import Person from "../personCard";
import Header from "../headerPersonList";

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

function TemplateActorsListPage ({ person }) {
  return (
   <>
    <Grid container sx={styles.root}>
       <Grid item xs={12}>
        <Header title={title} />
    </Grid>
        <Grid item container spacing={1}>
            {person.map((person) =>  (
              <Grid key={person.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Person key={person.id} person={person} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>  
  );
}
export default TemplateActorsListPage;


