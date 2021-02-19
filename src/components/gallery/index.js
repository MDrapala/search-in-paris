import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import LoadingSpinner from '../loading/index';

import './index.css';

export default class Gallery extends Component {
  render() {
    const {
      isLoading,
      rows,
      maxPages,
      resultData,
    } = this.props;

    const renderResult = () => {
      resultData.map((label, i) => (
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {rows}
              {maxPages}
              {label.datasets[i].metas.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ));
    };

    return (
      <div className="container">
        { isLoading ? (
          <div>
            <h1>Search Gallery Result</h1>
            {renderResult}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    );
  }
}
