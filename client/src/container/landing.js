import React, { Component } from "react";
import "../css/landing.css";
import { Link } from "react-router-dom";
import Filter from '../component/filter';
import { connect } from 'react-redux';
import '../css/style.css';
import { LoginAction, fetchHotels, selectHotel } from '../redux/actions/postAction';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Navbar, Nav, Container } from 'react-bootstrap';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        amenities: [],
        range: 40,
      }
    };
  }

  componentDidMount() {
    this.props.fetchHotels()
  }

  updateOnFilter = (filtersChild) => {
    this.setState({ filters: filtersChild })
  }
  Logout = () => {
    this.props.LoginAction("", "", false)
  }
  selectHotel = (id) => {
    this.props.selectHotel(id)
  }
  render() {
    return (
      <div className="container1">


        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link eventKey={2}>
                  <div className="cont">
                    {(this.props.user && !this.props.user.name) && <Redirect to="/" />}
                    <button className="btn btn-lg btn-primary btn-block logout" onClick={this.Logout}>Logout</button>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <div className="containerTest">
          <div className="item-y">
            <Filter updateOnFilter={this.updateOnFilter} />
          </div>
          <div className="item-x">
            {this.props && this.props.hotels ?
              this.props.hotels
                .filter(
                  hotel => this.state.filters.amenities.every(amenity => hotel.amenities.includes(amenity.value))
                )
                .map((item, i) => {
                  return (
                    <Fade right key={i}>
                      <Link
                        className="linkTo"
                        to={{ pathname: "/hotelDetails" }}
                      >
                        <div className="grid-container" onClick={() => this.selectHotel(item.id)}>
                          <div className="item1">
                            <div className="header-container">
                              <div className="hotelName">
                                <h2>
                                  <p>{item.name}</p>
                                </h2>
                              </div>
                              <div className="rating">{item.rating}/5</div>
                            </div>
                          </div>
                          <div className="item2">
                            <img
                              className="gallery__img"
                              src={`../hotels/${item.images[0]}`}
                              alt="Hotel"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="item3">
                            <div className="main-container">
                              <div className={`priceCat ${item.price_category ? item.price_category : ""}`} >{item.price_category}</div>
                              <div className="distance">
                                <svg width="24" height="24">
                                  <path d="M12 5C9.8 5 8 6.8 8 9s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 7c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z"></path>
                                  <path d="M18 8.2C17.6 5.3 15 3 12 3S6.4 5.3 6 8.2V9c0 .7.1 1.4.4 2.1l4.8 9.4c.2.3.5.5.9.5s.7-.2.9-.5l4.8-9.4c.1-.7.2-1.4.2-2.1v-.8zm-1.3 2.5L12 20l-4.7-9.3C7.1 10.2 7 9.6 7 9v-.6C7.4 5.9 9.5 4 12 4s4.6 1.9 5 4.4V9c0 .6-.1 1.2-.3 1.7z">
                                  </path>
                                </svg>
                                <b>{item.distance_to_venue}</b> kms away from the venue.
                              </div>
                            </div>
                          </div>
                          <div className="item4">
                            <p>Amenities:</p>
                            <ul>
                              {item.amenities.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Link>
                    </Fade>
                  )
                    ;
                })
              :
              <div className="card"> Loading</div>
            }
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.data.globalObject.loginUser,
    hotels: state.data.globalObject.allHotels
  }
}

export default connect(mapStateToProps, { LoginAction, selectHotel, fetchHotels })(Landing);
