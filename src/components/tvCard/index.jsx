import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";


const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function TvCard({tv, action}) {
    return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        title={
          <Typography variant="h5" component="p">
            {tv.name}{" "}
          </Typography>
        }
    />
    <CardMedia
      sx={styles.media}
      image={
        tv.poster_path
          ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
          : img
        }
    />
    <CardContent>
    </CardContent>
    <CardActions disableSpacing>
      {action(tv)}
        <Link to={`/tv/${tv.id}`}>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
        </Link>
    </CardActions>
   </Card>
  );
  }
     