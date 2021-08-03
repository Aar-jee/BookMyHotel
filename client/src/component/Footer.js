import React, { Component } from 'react';
import '../css/style.css';

class Footer extends Component {
  render() {
    return (

      < div className="App" >
        <div className="footer_white">
          <section className="footer_section">
            <div className="cont">
              <div className="row footer-wrapper">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="footer-logo">
                    <img src="https://ww1.prweb.com/prfiles/2017/01/10/14985328/relex-logo-rgb.png" alt="Img Relex" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="address">
                    <p className="footer-heading">Contact</p>
                    <p> Postintaival 7
                      <br /> 00230 Helsinki </p>
                    <p> Phone: +358 (0) 20 743 5730</p>
                    <p> Email: info@relexsolutions.com   </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="social-media">
                    <p className="footer-heading">Social</p>
                    <ul className="footer-list">
                      <li>
                        <a href="https://www.facebook.com/RELEXsolutions/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/relexsolutions/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/c/RetailLogisticsExcellenceRELEXOyHelsinki">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bottom-section">
            <div className="footer-bar">
              <p>&copy; 2021 Relex, Inc. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div >
    );
  }
}
export default Footer;

