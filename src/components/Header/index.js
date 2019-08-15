import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logoRedVentures.png'

import './styles.css';

export default class Header extends Component {
  render() {
    return <header>
      <div className="logo">
        <img src={logo} alt="RedVentures Logo"/>
      </div>
      <div className="links">
        <ul>
            <NavLink to="/modelr" ><li>Model R</li></NavLink>
            <NavLink to="/ModelQ" ><li>Model Q</li></NavLink>
            <NavLink to="/ModelQ" ><li>Model Mobi</li></NavLink>
            <NavLink to="/ModelQ" ><li>Model Charlie</li></NavLink>
            <NavLink to="/ModelQ" ><li>Model Italy</li></NavLink>
        </ul>
      </div>
    </header>;
  }
}