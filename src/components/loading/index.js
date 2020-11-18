import React from 'react';
import ReactLoading from 'react-loading';

import './index.css';

const Loading = () => (
  <div className="loading">
    <ReactLoading
      type="cylon"
      color="#fff"
    />
  </div>
);

export default Loading;
