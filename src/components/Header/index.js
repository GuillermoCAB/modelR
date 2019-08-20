import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logoRedVentures.png'

import './styles.css';

export default class Header extends Component {
  render() {
    return <header className="col-s-12">
      <div className="logo">
        <img src={logo} alt="RedVentures Logo" />
      </div>
      <div className="links">
        <ul>
            <NavLink to="/" ><li>Model R</li></NavLink>
            <NavLink to="/ModelQ" ><li>Model Q</li></NavLink>
            <NavLink to="/ModelQ" ><li>Model Mobi</li></NavLink>
            <NavLink to="/ModelQ" ><li>Model Charlie</li></NavLink>
            <NavLink to="/ModelQ" ><li>Model Italy</li></NavLink>
        </ul>
      </div>
    </header>;
  }
}