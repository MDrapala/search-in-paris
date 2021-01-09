import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../searchBar/index';
import LoadingSpinner from '../loading/index';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      result: [],
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { search } = this.state;

    this.setState({ isLoading: true }, () => {
      axios.get(`https://opendata.paris.fr/api/datasets/1.0/search/?q=${search}`)
        .then((res) => {
          const resultat = res.data;
          if (resultat.nhits === 0) {
            document.getElementById('error').innerHTML = `There is nothing for "${search}"`;
          } else {
            this.setState({ isLoading: false, result: [resultat] });
          }
        });
    });
  }

  handleOnChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { result, search, isLoading } = this.state;
    return (
      <div>
        <SearchBar value={search} onChange={this.handleOnChange} onSubmit={this.handleSubmit} />
        <div className="container" id="error" />
        {isLoading ? <LoadingSpinner /> : result.map((label, i) => <li className="container" key={label.datasets[i].datasetid}><div className="color" dangerouslySetInnerHTML={{ __html: label.datasets[i].metas.description }} /></li>)}
      </div>
    );
  }
}
