import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import banner from '../../images/banner.png';
import arrow from '../../images/arrow.png';

export default class Home extends Component {
  render() {
    return <div>
        <Header />
        <section className="banner">
            <img src={banner} alt=""/>
            <Link to='/modelr/engine'>
            <button className="begin">
                B E G I N
                <img src={arrow} alt="seta"/>
            </button>
            </Link>
        </section>
        <Footer />
    </div>;
  }
}
