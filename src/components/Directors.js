import React from "react";
import { directors } from "../data";

function Directors() {
  
  const DirectorList = directors.map((director) => {

    const DirectorMoviesList = director.movies.map((movie) => {
      return (<li key={movie}>{movie}</li>)
    })

    return (
      <div key={director.name}>
        {director.name}
        <ul>
          {DirectorMoviesList}
        </ul>
      </div>
    )
  })
  
  
  return (
    <div>
      <h1>Directors Page</h1>
      {DirectorList}

    </div>
)}

export default Directors;
