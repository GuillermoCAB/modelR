import React, { Component } from 'react';

import './styles.css';

import arrow from '../../images/arrow.png';

export default class SelecBar extends Component {
  render() {
    return <footer className='select'>

      <div className="info">
        <div className="price">
          <p>Total</p>
          <p className="priceValue">${this.props.formatNumber(63000 + this.props.state.selEngine.price)}</p>
        </div>
        <div className="model">
          <p>Model R</p>
        </div>
      </div>

      <div className="selected">
        <div className="engine">
          <p>{this.props.state.selEngine.kwh}
            <span className="colored">{this.props.state.selEngine.type}</span>
          </p>
        </div>
        <div className="color">
          <img src={`../../images/color-4.png`} alt=""/>
        </div>
        <div className="wheels">
          <img src={`../../images/wheels-20” Silver Metalic.png`} alt=""/>
        </div>
      </div>

      <div className="button">
        <button className="next">next
          <img src={arrow} alt="Red Ventures Seta"/>
        </button>
      </div>
      
    </footer>;
  }
}