import React from "react";
import Tv from "../tvCard";
import Grid from "@mui/material/Grid";

const TvList = ( {tv, action }) => {
  let TvCards = tv.map((tv) => (
    <Grid key={tv.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Tv key={tv.id} tv={tv} action={action} />
    </Grid>
  ));
  return TvCards;
};

export default TvList;