import React from "react";
import { movies } from "../data";

const MovieList = movies.map((movie) => {
  
  const GenreList = movie.genres.map((genre) => {
    return (
    <li key={genre}>{genre}</li>
    )})
  
  return(
  <div key={movie.title}>
    <h3>{movie.title}</h3>
    <p>{movie.time}</p>
    <ul>{GenreList}</ul>
  </div>
  )
}
)


function Movies() {
  return (
  <div> 
    <h1>Movies Page</h1>
    <div>{MovieList}</div>

  </div>
)}

export default Movies;
