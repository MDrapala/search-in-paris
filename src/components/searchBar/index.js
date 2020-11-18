import React, { Component } from 'react';
import './index.css';

export default class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-bar">
        <input type="search" name="value" onChange={this.handleOnChange} value="test" pattern=".*\S.*" required />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}
