import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import arrow from '../../images/arrow.png';

export default class SelecBar extends Component {
  prox = () => {this.props.setParentState({step: this.props.state.step + 1})}
  render() {
    return <footer className='select'>
      
      <div className="info">
        <div className="price">
          <p>Total</p>
          <p className="priceValue">${this.props.formatNumber(this.props.state.selPrice)}</p>
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
          <img src={`../../images/color-${this.props.state.selColor.id}.png`} alt=""/>
        </div>
        <div className="wheels">
          <img src={`../../images/wheels-${this.props.state.selWheel.id}.png`} alt=""/>
        </div>
      </div>

      <div className="button">
        <button className="next" onClick={this.prox}>next
          <img src={arrow} alt="Red Ventures Seta"/>
        </button>
      </div>
      
    </footer>;
  }
}