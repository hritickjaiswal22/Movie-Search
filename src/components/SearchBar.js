import React from 'react';
import './styles/SearchBar.css';

class SearchBar extends React.Component {
  state = { movie: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.makeAPICall(this.state.movie, 's');
  };

  render() {
    return (
      <article className="SearchBox">
        <form onSubmit={this.onFormSubmit} className="SearchForm">
          <input
            placeholder="Movie Name"
            value={this.state.movie}
            type="text"
            onChange={(e) => {
              return this.setState({ movie: e.target.value });
            }}
          ></input>
        </form>
      </article>
    );
  }
}

export default SearchBar;
