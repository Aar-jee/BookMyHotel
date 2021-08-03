import React, { Component } from 'react';
import '../css/style.css';

const imgStyle = {
  height: '60px'
};

class Header extends Component {
  render() {

    return (

      <div className="logo_wrapper">
        <a className="navbar-brand" href="index.html">
          <img src="https://ww1.prweb.com/prfiles/2017/01/10/14985328/relex-logo-rgb.png" alt="Relex" style={imgStyle} />
        </a>
      </div>
    );
  }
}

export default Header;

