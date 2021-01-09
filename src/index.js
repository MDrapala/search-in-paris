import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

import './css/index.css';
import './css/index.scss';

class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
