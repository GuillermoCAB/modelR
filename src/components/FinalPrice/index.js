import React, { Component } from 'react';

import refresh from '../../images/refresh-arrow.png'

import Red from '../../images/final-4.png'
import Blue from '../../images/final-5.png'
import Gray from '../../images/final-6.png'

import './styles.css';

export default class FinalPrice extends Component {

  handleRebuild = async () => {
   await this.props.setParentState({ 
      selEngine: this.props.state.engines[0],
      selColor: {
        price: 0,
        id: 0,
       },
      selWheel: {
         price: 0,
         id: 0,
       },
      step: 1,  
     })

     this.props.setPrice()
  }

  selectImageClr = () => {
    if (this.props.state.selColor.id == 4) {
      return Red
    } else if (this.props.state.selColor.id == 5) {
      return Blue
    } else { return Gray }
  }

  render() {
    return <div>
        <section className="finalPrice">

        <div  className="cont" >
          
          <div className="row">   

            <div className="col-sm-0 col-md-6"></div>   

            <div className="col-sm-12 col-md-6">
              
              <div className="title">            
                <h1>Your</h1>
                <h1 className="bold"> Model</h1>
                <h1 className="red"> R</h1>
              </div>
              
            </div>

          </div>

        </div>

          <div className="content">
            <div className="row">

              <div className="col-sm-12 col-md-6">
                <div className="image">
                  <img src={this.selectImageClr()} alt=""/>           
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="menu">
                  <ul>

                    <div className="start">
                      <p className="label">Starting price</p>
                      <p className="price">{this.props.checkPrice(this.props.addMoneySign(this.props.state.response.price))}</p>
                    </div>

                    <div className="selected">

                      <div className="engine">
                        <p className="label">{this.props.state.selEngine.kwh} {this.props.state.selEngine.type} - {this.props.state.selEngine.kwh} KWh 
                        - {this.props.state.selEngine.range} miles range
                        </p>
                        <p className="price">{this.props.checkPrice(this.props.addPlus(this.props.addMoneySign(this.props.state.selEngine.price)))}</p>
                      </div>

                      <div className="color">
                        <p className="label">{this.props.state.selColor.label}</p>
                        <p className="price">{this.props.checkPrice(this.props.addPlus(this.props.addMoneySign(this.props.state.selColor.price)))}</p>
                      </div>

                      <div className="wheel">
                        <p className="label">{this.props.state.selWheel.label}</p>
                        <p className="price">{this.props.checkPrice(this.props.addPlus(this.props.addMoneySign(this.props.state.selWheel.price)))}</p>
                      </div>

                    </div>

                    <div className="final">
                      <p className="label">Final Price</p>
                      <p className="price">{this.props.checkPrice(this.props.addMoneySign(this.props.state.selPrice))}</p>
                    </div>

                    <button className="restart" onClick={this.handleRebuild}>
                      REBUILD
                      <img src={refresh} alt=""/>
                    </button>
                  </ul>
                </div>
              </div>

              </div>
          </div>

        </section>
        </div>;
  }
}