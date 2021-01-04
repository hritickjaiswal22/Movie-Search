import React from 'react';
import { Link } from 'react-router-dom';

import './styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="Card col-md-4 col-sm-6 justify-content-around">
      <div class="ImageBox">
        <img className="Image" src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="CardInfo">
        <h1>{movie.Title}</h1>
        <Link
          to={{
            pathname: '/movie',
            aboutProps: {
              movieID: movie.imdbID,
            },
          }}
        >
          <button className="btn btn-outline-primary">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
