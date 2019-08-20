import React, { Component } from 'react';

import './styles.css';

export default class Footer extends Component {
  render() { 
    return <footer id="main">

      <div className="infobox">
        <div className="metric">
          <p className="big">2.5</p>
          <p className="small">s</p>
        </div>
        <div className="info">
          <p>From 0 to 100</p>
        </div>
      </div>

      <div className="infobox">
        <div className="metric">
          <p className="big">420</p>
          <p className="small">mi</p>
        </div>
        <div className="info">
          <p>Miles range</p>
        </div>
      </div>

      <div className="infobox">
        <div className="metric">
          <p className="big">250</p>
          <p className="small">mp/h</p>
        </div>
        <div className="info">
          <p>Max speed</p>
        </div>
      </div>

    </footer>;
  }
}