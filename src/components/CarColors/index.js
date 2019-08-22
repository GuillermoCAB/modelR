import React, { Component } from 'react';

import api from '../../services/api';
import Spinner from '../../components/Spinner/Spinner.js'

import Red from '../../images/modelR-4.png'
import Blue from '../../images/modelR-5.png'
import Gray from '../../images/modelR-6.png'

import BtnRed from '../../images/color-4.png'
import BtnBlue from '../../images/color-5.png'
import BtnGray from '../../images/color-6.png'

import './styles.css';

export default class CarColors extends Component {

  state ={
      loading: true,
      counter: 0,
  }; 

  async componentDidMount() {

    const response = await api.get('/')     

    this.props.setParentState({ colors: response.data.data.color.items });

    this.props.setParentState({ selColor: this.props.state.colors[0] })    

    this.addActiveClass(this.props.state.selColor)
  }

  selecHandler = async e => {

    await this.props.setParentState({ selColor: e})

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

  selectImage = () => {
    if (this.props.state.selColor.id == 4) {
      return Red
    } else if (this.props.state.selColor.id == 5) {
      return Blue
    } else { return Gray }
  }

  selectButtonClr = (e) => {
    if (e.id == 4) {
      return BtnRed
    } else if (e.id == 5) {
      return BtnBlue
    } else { return BtnGray }
  }
  
  imageLoaded = async () => {
    var counter = this.state.counter + 1
    this.setState({ counter: counter });
    console.log(this.state.counter)
    if (this.state.counter >= 5) {
      await this.setState({ loading: false });
    }
  }

  render() {

    return <div>
      
        <div style={{display: "none"}}>
        <img src={Red} onLoad={() => {this.imageLoaded()}} alt=""/>
        <img src={Blue} onLoad={() => {this.imageLoaded()}} alt=""/>
        <img src={Gray} onLoad={() => {this.imageLoaded()}} alt=""/>
        </div>

        <div style={{display: this.state.loading ? "block" : "none"}}>
        <Spinner />
        </div>
        <section className="color" style={{display: this.state.loading ? "none" : "flex"}}>

          <div  className="cont" >
            <div className="row">   
              <div className="col-sm-0 col-md-6"></div>         
              <div className="col-sm-12 col-md-6">

                <div className="title">            
                  <h1>Color</h1>
                  <p>{this.props.state.response.color.description}</p>
                </div>
              
              </div>
  
            </div>
  
          </div>


          <div className="content">
            <div className="row">

              <div className="col-sm-12 col-md-6">
                  <div className="image">
                    <img src={this.selectImage()} alt=""/>
                    <div className="footer">
                      <p className="colorName">{this.props.state.selColor.label}</p>
                      <p className="colorPrice">{this.props.checkPrice(this.props.addPlus(this.props.addMoneySign(this.props.state.selColor.price)))}</p>
                    </div>
                  </div>
                </div>   
                
                <div className="col-sm-12 col-md-6">
                  <div className="menu">
                    <ul>
                      {this.props.state.colors.map(item => 
                      <button  key={item.id} id={item.id} onClick={()=> {this.selecHandler(item)}}>
                        <img src={this.selectButtonClr(item)} onLoad={() => {this.imageLoaded()}} alt=""/>
                      </button>
                        )}
                    </ul>                    
                  </div>
                </div>

            </div>
          </div>

        </section>
        </div>;
  }
}