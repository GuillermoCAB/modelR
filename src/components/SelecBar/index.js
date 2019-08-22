import React, { Component } from 'react';

import arrow from '../../images/arrow.png';

import wheel7 from '../../images/wheels-7.png'
import wheel8 from '../../images/wheels-8.png'
import wheel9 from '../../images/wheels-9.png'

import BtnRed from '../../images/color-4.png'
import BtnBlue from '../../images/color-5.png'
import BtnGray from '../../images/color-6.png'

import './styles.css';

export default class SelecBar extends Component {

  selectButtonClr = () => {
    if (this.props.state.selColor.id == 4) {
      return BtnRed
    } else if (this.props.state.selColor.id == 5) {
      return BtnBlue
    } else if (this.props.state.selColor.id == 6) {
      return BtnGray
    } else { return }
  }

  selectWheelImage = (e) => {
    if (this.props.state.selWheel.id == 7) {
      return wheel7
    } else if (this.props.state.selWheel.id == 8) {
      return wheel8
    } else if (this.props.state.selWheel.id == 9) {
       return wheel9 
    } else {return }
  }

  prox = () => {
    this.props.setParentState({step: this.props.state.step + 1})
  }

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
          <img src={this.selectButtonClr()} alt=""/>
        </div>

        <div className="wheels">
          <img src={this.selectWheelImage()} alt=""/>
        </div>

      </div>

      <div className="button">
        <button className="next"
           onClick={this.prox}>next
           
          <img src={arrow} alt="Red Ventures Seta"/>
          
        </button>
      </div>
      
    </footer>;
  }
}