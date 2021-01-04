import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

import './styles/App.css';

import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  state = { movies: [], movie: {} };

  makeAPICall = (movie, type) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=1d5dadde&${type}=${movie}`)
      .then((response) => {
        this.setState({ movies: response.data.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  Component1 = () => {
    return (
      <div>
        <Header />
        <SearchBar makeAPICall={this.makeAPICall} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  };

  Component2 = (props) => {
    return (
      <div>
        <MovieDetails movieID={props.location.aboutProps.movieID} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={this.Component1} />
          <Route path="/movie" exact component={this.Component2} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// 'http://www.omdbapi.com/?apikey=1d5dadde&s=' + movie
