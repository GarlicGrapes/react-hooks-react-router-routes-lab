import React from "react";
import { actors } from "../data";

function Actors() {
  
  const ActorsList = actors.map((actor) => {

    const ActorMoviesList = actor.movies.map((movie) => {
      return (<li key={movie}>{movie}</li>)
    }) 
  
  return (
      <div key={actor.name}> {actor.name}
        <ul>
        {ActorMoviesList}
        </ul> 
      </div>
    )
})

  return (
  <div>
    <h1>Actors Page</h1>
    {ActorsList}
  </div>
  )}

export default Actors;
