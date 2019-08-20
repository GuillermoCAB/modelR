import React, { Component } from 'react';

import api from '../../services/api';
import Spinner from '../../components/Spinner/Spinner.js'

import './styles.css';

export default class Engine extends Component {

  state ={
      loading: true,
  };

  async componentDidMount() {

    const response = await api.get('/') 

    this.props.setParentState({ engines: response.data.data.engine.items });

    this.props.setParentState({ selEngine: this.props.state.engines[0] })

    this.setState({ loading: false })

    this.addActiveClass(this.props.state.selEngine)
  }

  engineHandler = async e => {

    await this.props.setParentState({ selEngine: e})

    this.removeActiveClass()

    this.addActiveClass(e)

    this.props.setPrice(e)

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

  render() {  

    if (this.state.loading === true ) return <Spinner />;

    return <div>
        <section className="engine">


          <div  className="cont" >
            <div className="row">   
              <div className="col-sm-0 col-md-6"></div> 

              <div className="col-sm-12 col-md-6">
                <div className="title">            
                  <h1>Engine</h1>
                </div>
              </div>

            </div>
          </div>

          <div className="content">

            <div className="row">

              <div className="col-sm-12 col-md-6">
                <div className="image">
                  <img src={`../../images/engine-${this.props.state.selEngine.type}.png`} alt=""/>
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                
                <div className="menu">
                  <ul className="engine">

                    {this.props.state.engines.map(item => 
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
                      <p>+ ${this.props.formatNumber(item.price)}</p>
                    </div>

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
