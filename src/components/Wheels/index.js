import React, { Component } from 'react';

import api from '../../services/api';
import Spinner from '../../components/Spinner/Spinner.js'

import './styles.css';

export default class Wheels extends Component {

  state = {
    wheelsInverterArray: [],
    wheelsArray: [],    
    loading: true,
  }

  async componentDidMount() {

    const response = await api.get('/') 

    this.props.setParentState({ wheels: response.data.data.wheels.items });

    this.props.setParentState({ selWheel: this.props.state.wheels[0] })

    this.createWheelsArray()

    this.setState({ loading: false })

    this.addActiveClass(this.props.state.selWheel)

    this.pageScroll()
  }

  selecHandler = async e => {
    this.setScroll(e)

    await this.props.setParentState({ selWheel: e})

    this.removeActiveClass()

    this.addActiveClass(e)

    this.props.setPrice(e)

  }

  removeActiveClass = () => {
    var element = document.getElementsByClassName("select")[0];
    element.classList.remove("select");
    
  }

  addActiveClass = e => {
    var element = document.getElementById(e.id);
    element.classList.add("select");

  }

  createWheelsArray = () => {
    const array = [];

    for (let i = 0; i < 2; i++) {
      const element = this.props.state.wheels[i];

      array.push(element)      
    }

    const array2 = [];
    const element2 = this.props.state.wheels[2];

      array2.push(element2)

    this.setState({ wheelsInverterArray: array })
    this.setState({ wheelsArray: array2 })
  }

  setScroll = (e) => {
    var selected = document.getElementsByClassName("select")[0];
    var element = document.getElementById("scrollable");

    if (e.id === 8) {
      element.scrollBy(-240, 0)
    } else if (e.id === 9) {
      element.scrollBy(240, 0)
    } else if (e.id === 7 && selected.id == 8) {
      element.scrollBy(120, 0)
    } else {      
      element.scrollBy(-100, 0)
    }
      
        
  }

  pageScroll = () => {
    var element = document.getElementById("scrollable");
    element.scrollBy(120, 0);

    console.log(element.id)
  }

  render() {

    if (this.state.loading === true ) return <Spinner />;
    
    return <div>
        <section className="wheels">

          <div  className="cont" >
            <div className="row">        
              <div className="col-md-12">

                <div className="title">            
                  <h1>Wheels</h1>
                </div>

              </div>
            </div>
          </div>

            <div className="menu" id="scrollable">
              <ul>
                <div className="inverter">
                  {this.state.wheelsInverterArray.map(item => 
                  <button  key={item.id} id={item.id} onClick={()=> {this.selecHandler(item)}}>
                    <img src={`../../images/wheels-${item.id}.png`} alt=""/>
                    <p className="name">{item.label}</p>
                    <p className="price">{this.props.checkPrice(this.props.addPlus(this.props.addMoneySign(item.price)))}</p>
                  </button>
                    )}                  
                </div>
                <div className="noninver">
                  {this.state.wheelsArray.map(item => 
                  <button  key={item.id} id={item.id} onClick={()=> {this.selecHandler(item)}}>
                    <img src={`../../images/wheels-${item.id}.png`} alt=""/>
                    <p className="name">{item.label}</p>
                    <p className="price">{this.props.checkPrice(this.props.addPlus(this.props.addMoneySign(item.price)))}</p>
                  </button>
                    )}
                </div>
              </ul>
            </div>

        </section>
        </div>;
  }
}