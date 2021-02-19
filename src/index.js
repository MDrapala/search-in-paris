import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/index.css';
import './assets/index.scss';

import Gallery from './components/gallery/index';
import SearchBar from './components/searchBar/index';

import getAllEvents from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      resultData: [],
      rows: 10,
      maxPages: 1,
      isLoading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { search } = this.state;
    const res = await getAllEvents(search);
    this.setState({ isLoading: res.isLoading, resultData: [res.resultData] });
  }

  handleOnChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      resultData,
      rows,
      maxPages,
      search,
      isLoading,
    } = this.state;

    return (
      <div>
        <SearchBar value={search} onChange={this.handleOnChange} onSubmit={this.handleSubmit} />
        <div className="container" id="error" />
        <Gallery loading={isLoading} rows={rows} maxPages={maxPages} resultData={resultData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
