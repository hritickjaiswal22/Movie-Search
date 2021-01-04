import React from 'react';
import MovieCard from './MovieCard';

import './styles/MovieList.css';

const MovieList = (props) => {
  const movies = props.movies.map((movie) => {
    return <MovieCard movie={movie} key={movie.imdbID} />;
  });

  return (
    <main>
      <div className="MovieGallery container">
        <div className="row">{movies}</div>
      </div>
    </main>
  );
};

export default MovieList;
