import React, { useState } from "react";
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

const PersonCard =  ({ person }) => {
  return (
    <>
      <p>Review By: {person.name} </p>
      <p>{person.biography} </p>
    </>
  );
};
export default PersonCard;