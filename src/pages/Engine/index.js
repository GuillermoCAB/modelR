import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';
import SelecBar from '../../components/SelecBar';

export default class Engine extends Component {
  state = {
    response: [],
    engines:[],
    selEngine: {},
    color: {},
    wheel:{},    
  };

  async componentDidMount() {

    const response = await api.get('/') 

    await this.setState({ response: response.data.data });

    await this.setState({ engines: response.data.data.engine.items });

    this.setState({ selEngine: this.state.engines[0] })

    this.addActiveClass(this.state.selEngine)

    console.log(this.state)
  }

  engineHandler = async e => {

    await this.setState({ engine: e})

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
        <section className="engine">

          <div className="image">
            <img src={`../../images/engine-${this.state.selEngine.type}.png`} alt=""/>
          </div>

          <div className="menu">
            <h1>Engine</h1>
            <ul>
              {this.state.engines.map(item => 
              <button  key={item.id} id={item.id} onClick={()=> {this.engineHandler(item)}}>
                <li>
                  <h1>
                    <span>{item.kwh}</span>
                    <span className="colored">{item.type}</span>
                  </h1>
                  <div className="feature">
                    <span className="dark">{item.kwh}</span>
                    <span> kWh</span>
                  </div>
                  <div className="feature" id="last">
                    <span className="dark">{item.range}</span>
                    <span> miles range</span>
                  </div>
                </li>
              <div className="after">
                <p>+ ${this.formatNumber(item.price)}</p>
              </div>
              </button>
                )}
            </ul>
          </div>
        </section>
        <SelecBar state={this.state} formatNumber={this.formatNumber} />
    </div>;
  }
}
