import React, { Component } from 'react';

import api from '../../services/api';
import Spinner from '../../components/Spinner/Spinner.js'

import wheel7 from '../../images/wheels-7.png'
import wheel8 from '../../images/wheels-8.png'
import wheel9 from '../../images/wheels-9.png'

import './styles.css';

export default class Wheels extends Component {

  state = {
    wheelsInverterArray: [],
    wheelsArray: [],    
    loading: true,
    counter: 0,
  }

  async componentDidMount() {

    const response = await api.get('/') 

    this.props.setParentState({ wheels: response.data.data.wheels.items });

    this.props.setParentState({ selWheel: this.props.state.wheels[0] })

    this.createWheelsArray()

    this.addActiveClass(this.props.state.selWheel)
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
  }

  selectWheelImage = (e) => {
    if (e.id == 7) {
      return wheel7
    } else if (e.id == 8) {
      return wheel8
    } else { return wheel9 }
  }
  
  imageLoaded = async () => {
    var counter = this.state.counter + 1
    this.setState({ counter: counter });
    console.log(this.state.counter)
    if (this.state.counter >= 2) {
      await this.setState({ loading: false });

      this.pageScroll()
    }
  }

  render() {

    return <div>

        <div style={{display: this.state.loading ? "block" : "none"}}>
        <Spinner />
        </div>

        <section className="wheels" style={{display: this.state.loading ? "none" : "flex"}}>

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

                  <button  
                    key={item.id} id={item.id} 
                    onClick={()=> {this.selecHandler(item)}}>
                    
                    <img src={this.selectWheelImage(item)} 
                      onLoad={() => {this.imageLoaded()}} 
                      alt=""
                      />

                    <p className="name">{item.label}</p>

                    <p className="price">
                    {this.props.checkPrice(this.props.addPlus(this.props.addMoneySign(item.price)))}
                    </p>

                  </button>

                    )}                  
                </div>

                <div className="noninver">
                  {this.state.wheelsArray.map(item => 

                  <button  
                    key={item.id} 
                    id={item.id} 
                    onClick={()=> {this.selecHandler(item)}}>
                   
                    <img src={this.selectWheelImage(item)} 
                      onLoad={() => {this.imageLoaded()}} 
                      alt=""/>

                    <p className="name">{item.label}</p>

                    <p className="price">
                    {this.props.checkPrice(this.props.addPlus(this.props.addMoneySign(item.price)))}
                    </p>

                  </button>

                    )}
                </div>

              </ul>
            </div>

        </section>
        </div>;
  }
}