import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { getPopularActor } from "../api/tmdb-api";

const PopularActorPage = (person) => {
  const { id } = useParams();

  useEffect(() => {
    getPopularActor(id).then((person) => {
      setPopularActor(person);
    });
  }, [id]);

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <ActorDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default PopularActorPage;
