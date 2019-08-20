import React, { Component } from 'react';

import SelecBar from '../SelecBar';

export default class FooterSlider extends Component {

  render() {
    if(this.props.state.step < 4) {return <SelecBar 
        state={this.props.state} 
        setParentState={this.props.setParentState} 
        formatNumber={this.props.formatNumber}/>} 

    else {return ''}
  }
}
