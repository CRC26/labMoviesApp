
import { useParams } from "react-router-dom";
import PersonHeader from "../components/personHeader/";
import PersonDetails from "../components/personDetails/";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, {useState, useEffect}  from "react";

const styles = {
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};
const PersonDetailsPage = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((person) => {
          //console.log(person)
          setPerson(person);
        });
    }, [id]);
  
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
      )
        .then((res) => res.json())
        .then((json) => json.profiles)
        .then((images) => {
          //console,log(images)
          setImages(images);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  return (
    <>
      {person ? (
        <>
         <PersonHeader person={person} />

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
                        alt={'Image alternative'}
                      />                    
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <PersonDetails person={person} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};


export default PersonDetailsPage;