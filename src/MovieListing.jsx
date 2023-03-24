// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from './movies';


function MovieListing() {
    return (
        <div className="container">
            hoo
        {movies.map(movie => (
            <div className="card mb-3" style={{maxWidth: "540px"}} key={movie.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={movie.poster} className="img-fluid rounded-start" alt={movie.title} />
                        </div>
                        <div className="col-md-8" >
                            <div className="card-body" class="p-3 mb-2 bg-danger text-white">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.description}</p>
                                <p className="card-text"><small className="text-muted">{movie.duration} minutes | {movie.language} | {movie.genre.join(', ')}</small></p>
                                <Link type="button" class="btn btn-info" to={`/movie/${movie.id}` }>Read More</Link>
                            </div>
                        </div>
                    </div>
            </div>
        ))}
      </div>
    );
  }
  
  export default MovieListing;
  