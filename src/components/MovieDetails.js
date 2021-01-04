import React from 'react';
import './styles/MovieDetails.css';
import axios from 'axios';

class MovieDetails extends React.Component {
  state = {
    title: '',
    plot: '',
    poster: '',
  };

  componentDidMount() {
    axios
      .get(`http://www.omdbapi.com/?apikey=1d5dadde&i=${this.props.movieID}`)
      .then((response) => {
        const { data } = response;
        console.log(data);
        this.setState({
          title: data.Title,
          plot: data.Plot,
          poster: data.Poster,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <article className="MovieArticle">
        <div className="MovieCard">
          <div className="ImageBox">
            <img className="MoviePoster" src={this.state.poster} />
          </div>
          <div className="MovieInfo">
            <h1 className="MovieTitle">{this.state.title}</h1>
            <p className="MoviePlot">{this.state.plot}</p>
          </div>
        </div>
      </article>
    );
  }
}

export default MovieDetails;
