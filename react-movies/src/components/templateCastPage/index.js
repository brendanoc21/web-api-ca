import React from "react";
import Header from "../headerMovie";
import Grid from "@mui/material/Grid2";
import { getMovieActors } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import ActorList from "../actorList";
 
const TemplateCastPage = ({ movie, action }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["actors", { id: movie.id }],
    getMovieActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const actors = data.cast 

  return (
    <>
    <Grid container>
      <Grid size={12}>
        <Header movie={movie} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <ActorList action={action} actors={actors}></ActorList>
      </Grid>
    </Grid>
    </>
  );
};

export default TemplateCastPage;