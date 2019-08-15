import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Engine from '../Engine';

import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';
import SelecBar from '../../components/SelecBar';

export default class Builder extends Component {
  state = {
    response: [],
    engines:[],
    selEngine: {},
    colors: [],
    selColor: {},
    wheels: [],
    selWheel: {},  
    step: 1,  
  };

  async componentDidMount() {

    const response = await api.get('/') 

    await this.setState({ response: response.data.data });

    await this.setState({ engines: response.data.data.engine.items });

    this.setState({ selEngine: this.state.engines[0] })

    this.addActiveClass(this.state.selEngine)
  }

  engineHandler = async e => {

    await this.setState({ selEngine: e})

    this.removeActiveClass()

    this.addActiveClass(e)

  }

  removeActiveClass = () => {
    var element = document.getElementsByClassName("select")[0];
    element.classList.remove("select");

    this.setAftertoHidden()
  }

  addActiveClass = e => {
    var element = document.getElementById(e.id);
    element.classList.add("select");

    this.setAftertoDisplay(e)
  }

  setAftertoDisplay = e => {
    var element = document.getElementsByClassName("after")[e.id - 1];

    if (e.price === 0) {
      return
    } else {element.style.display = "flex";}
  }

  setAftertoHidden = () => {
    var element  = Array.from(document.getElementsByClassName("after"));

    element.forEach(element => {
      element.style.display = "none";
    });

  }

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  render() {
    return <div>
        <Header />        
        <BrowserRouter>
          <Route path='/builder/engine' exact component={Engine} />
        </BrowserRouter>
        <SelecBar state={this.state} formatNumber={this.formatNumber} />
    </div>;
  }
}
