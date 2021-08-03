import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../css/hotelDetails.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import '../css/style.css';
import { selectRoom } from '../redux/actions/postAction';

class HotelDetails extends Component {

  roomSelected = (roomId) => {
    this.props.selectRoom(roomId)
  }

  render() {
    let hotelSelected = this.props.hotels.find(element => element.id === this.props.hotelPicked)
    return (
      <div className="hotelDetail">
        <div className="carousel">

          <Carousel>
            {
              hotelSelected && hotelSelected.images.map((i) =>
                <div key={i}>
                  <img src={`http://localhost:8001/hotels/${i}`} alt="details" />
                </div>)
            }
          </Carousel>
        </div>
        <div className="descriptionBox">

          <div className="hotelNameNRating">
            <div className="nameOfHotel">
              <h4>
                <p>{hotelSelected.name}</p>
              </h4>
            </div>
            <div className="ratingOfHotel">{hotelSelected.rating}/5</div>
          </div>

          <div className="descHotel">{hotelSelected.description}</div>

        </div>
        <div className="rooms">
          {hotelSelected.rooms.map((room, i) =>
            <div className="room" key={i}>
              <div className="roomType">
                <div className="roomTypeName">
                  <h2>{room.name}</h2>
                </div>
                <div className="occupancy">Occupancy : <b>{room.max_occupancy}</b></div>
                <div className="roomRating">{room.rating}/5</div>
              </div>
              <div className="roomDesc">
                <p>{room.description}</p>
              </div>
              <div className="roomPrice">
                <div className="priceTag"><h3>${room.price_in_usd}</h3></div>
                <div className="buttonSpace">
                  <Link className="linkTo" to={{
                    pathname: "/Pickdate",
                  }}
                  >
                    <button onClick={() => this.roomSelected(room.id)} className={`button ${room.available}`} disabled={!room.available}>{room.available ? 'Select' : 'Not Available'}</button>
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    hotelPicked: state.data.globalObject.hotelPicked,
    hotels: state.data.globalObject.allHotels
  }
}
export default connect(mapStateToProps, { selectRoom })(HotelDetails);