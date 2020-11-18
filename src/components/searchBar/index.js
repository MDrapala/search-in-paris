import React from 'react';
import './index.css';

export default class SearchBar extends React.Component {
  render() {
    const { onChange, onSubmit, value } = this.props;
    return (
      <form onSubmit={onSubmit} className="search-bar">
        <input type="search" name="search" onChange={onChange} value={value} pattern=".*\S.*" required />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}
