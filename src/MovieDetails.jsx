import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from './movies';
import { Link } from 'react-router-dom';


function MovieDetails() {
  const { id } = useParams();
  
  const movie = movies.find(movie => movie.id.toString() === id);
  if (!movie) {
    return <div>No movie found with ID {id}</div>;
  }
  return (
    <div class="container">
      {/* <div class="p-3 mb-2 bg-info text-dark"> */}

      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Directed by: {movie.directors.join(', ')}</p>
      <p>Release date: {movie.releaseDate}</p>
      <p>Genre: {movie.genre.join(', ')}</p>
      <p>Duration: {movie.duration} mins</p>
      <p>Languages: {movie.language}</p>
      <p>Cast: {movie.cast.join(', ')}</p>

      <p>Rating: {movie.rating} mins</p>
      <Link type="button" class="btn btn-danger" to={'/' }>Back</Link>
      <Link type="button" class="btn btn-info" to={`/movie/${movie.id}/booking` }>Book tickets</Link>

    </div>
  );
}

export default MovieDetails;


