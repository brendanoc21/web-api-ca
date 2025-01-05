import React from "react";
import Typography from "@mui/material/Typography";


const ActorDetails = ({ actor }) => {  
  return (
    <>
      <Typography variant="h5" component="h3">
        Date of Birth: {actor.birthday}
      </Typography>

      <Typography variant="h5" component="h3">
        Place of Birth: {actor.place_of_birth}
      </Typography>
      <br></br>
      <Typography variant="h5" component="h3">
        Biography:
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      <br></br>
      <Typography variant="h5" component="h3">
        Popularity: {actor.popularity}
      </Typography>
    </>
  );
};
export default ActorDetails ;