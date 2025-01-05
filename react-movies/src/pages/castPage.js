import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templateCastPage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const CastPage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate 
          movie={movie}
          title="Cast List"
          />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default CastPage;