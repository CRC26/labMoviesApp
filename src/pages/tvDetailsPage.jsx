import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import TvHeader from "../components/tvDetailsHeader/";
import TvDetails from "../components/tvDetails/";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const styles = {
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

const TvDetailsPage = (props) => {
  const { id } = useParams();
  const [tv, setTv] = useState(null);
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((tv) => {
        // console.log(movie)
        setTv(tv);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.posters)
      .then((images) => {
        // console,log(images)
        setImages(images);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {tv ? (
        <>
          <TvHeader tv={tv} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <div sx={styles.imageListRoot}>
                <ImageList cols={1}>
                  {images.map((image) => (
                    <ImageListItem
                      key={image.file_path}
                      sx={styles.gridListTile}
                      cols={1}
                    >
                     <img
                       src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                       alt={image.file_path}
                    />                 
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <TvDetails tv={tv} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default TvDetailsPage;