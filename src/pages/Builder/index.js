import React, { Component } from 'react';

import Slider from '../../components/Slider';

import Header from '../../components/Header';
import FooterSlider from '../../components/FooterSlider'

import api from '../../services/api';

export default class Builder extends Component {
  state = {
    response: [],
    engines:[],
    selEngine: {},
    colors: [],
      selColor: {
        price: 0,
        id: 0,
      },
    wheels: [],
      selWheel: {
        price: 0,
        id: 0,
    },  
    step: 1,  
    selPric: 0,
  };

  async componentDidMount() {

    const response = await api.get('/') 

    this.setState({ response: response.data.data });

    this.setState({ selPrice: this.state.response.price });
  }

  setParentState = async (i) => {
    await this.setState(i)    
  }

  setPrice = async (i) => {
    this.setState({ selPrice: this.state.response.price 
      + this.state.selEngine.price 
      + this.state.selColor.price 
      + this.state.selWheel.price })
  }

  formatNumber = (num) => {
    if (num == undefined){return num} 
      else {return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
  }
    
  checkPrice = (e) => {
    if ( e == 0 ) {return "Included"}
     else {return this.formatNumber(e)}
  }

  addPlus = (e) => {
    if ( e == 0 ) {return 0}
     else {return "+ " + e}    
  }

  addMoneySign = (e) => {
    if ( e == 0 ) {return 0}
     else {return "$" + e}    
  }

  render() {
    return <div>
        <Header />   
                   
        <Slider 
          state={this.state} 
          setParentState={this.setParentState} 
          formatNumber={this.formatNumber}
          setPrice={this.setPrice}
          checkPrice={this.checkPrice}
          addPlus={this.addPlus}
          addMoneySign={this.addMoneySign}
          />

        <FooterSlider 
          state={this.state} 
          formatNumber={this.formatNumber} 
          setParentState={this.setParentState}
          />
    </div>;
  }
}
