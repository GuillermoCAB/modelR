import React, { Component } from 'react';

import Engine from '../Engine';
import CarColors from '../CarColors';
import Wheels from '../Wheels';
import FinalPrice from '../FinalPrice';

export default class Slider extends Component {

  render() {
    if(this.props.state.step === 1) {return <Engine 
        state={this.props.state} 
        setParentState={this.props.setParentState} 
        formatNumber={this.props.formatNumber}
        setPrice={this.props.setPrice}
        checkPrice={this.props.checkPrice}
        addPlus={this.props.addPlus}
        addMoneySign={this.props.addMoneySign}
        />} 

    else if (this.props.state.step === 2) {return <CarColors 
        state={this.props.state} 
        setParentState={this.props.setParentState} 
        formatNumber={this.props.formatNumber}
        setPrice={this.props.setPrice}
        checkPrice={this.props.checkPrice}
        addPlus={this.props.addPlus}
        addMoneySign={this.props.addMoneySign}
        />}

    else if (this.props.state.step === 3) {return <Wheels 
        state={this.props.state} 
        setParentState={this.props.setParentState} 
        formatNumber={this.props.formatNumber}
        setPrice={this.props.setPrice}
        checkPrice={this.props.checkPrice}
        addPlus={this.props.addPlus}
        addMoneySign={this.props.addMoneySign}
        />} 

    else {return <FinalPrice 
        state={this.props.state} 
        setParentState={this.props.setParentState} 
        formatNumber={this.props.formatNumber}
        setPrice={this.props.setPrice}
        checkPrice={this.props.checkPrice}
        addPlus={this.props.addPlus}
        addMoneySign={this.props.addMoneySign}
        />}   
  }
}
