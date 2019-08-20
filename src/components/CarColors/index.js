import React, { Component } from 'react';

import api from '../../services/api';
import Spinner from '../../components/Spinner/Spinner.js'

import './styles.css';

export default class CarColors extends Component {

  state ={
      loading: true,
  };

  async componentDidMount() {

    const response = await api.get('/') 

    this.props.setParentState({ colors: response.data.data.color.items });

    this.props.setParentState({ selColor: this.props.state.colors[0] })

    this.setState({ loading: false })

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

  render() {

    if (this.state.loading === true ) return <Spinner />;

    return <div>
        <section className="color">

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
                    <img src={`../../images/modelR-${this.props.state.selColor.id}.png`} alt=""/>
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
                        <img src={`../../images/color-${item.id}.png`} alt=""/>
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