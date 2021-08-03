import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import moment from 'moment';
import { saveBooking } from '../redux/actions/postAction';
// import { Redirect } from 'react-router-dom';
import BookingConfirmed from '../component/bookingConfirmed';
import apidata from '../config.json';

class Confirmation extends Component {

    onToken = (token, addresses) => {
        let bookingObj = { id: token.id, email: token.email, brand: token.card.brand, funding: token.card.funding }
        this.props.saveBooking(this.props.user.name, this.props.user.pass, [...this.props.user.bookings, bookingObj])
    };

    render() {
        let hotelSelected = this.props.hotels.find(element => element.id === this.props.hotelPicked);
        let roomSelected = hotelSelected && hotelSelected.rooms.find(element => element.id === this.props.roomPicked);
        let amount = this.props.dates && roomSelected && (roomSelected.price_in_usd * this.props.dates.stay);
        let start = this.props.dates && (moment(this.props.dates.bookingStartDate).format("dddd, MMMM Do YYYY"));
        let end = this.props.dates && (moment(this.props.dates.bookingEndDate).format("dddd, MMMM Do YYYY"));
        return (

            <div>
                {this.props && this.props.saved ?
                    <BookingConfirmed />
                    :
                    <div className="confirmation">
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th><center><h2>Checkout</h2></center></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Hotel:</b> {hotelSelected && hotelSelected.name}</td>
                                </tr>
                                <tr>
                                    <td><b>Checkin:</b> {start}</td>
                                </tr>
                                <tr>
                                    <td><b>Room Type:</b> {roomSelected && roomSelected.name}</td>
                                </tr>
                                <tr>
                                    <td><b>Checkout:</b> {end}</td>
                                </tr>
                                <tr>
                                    <td><b>Occupancy:</b> {roomSelected && roomSelected.max_occupancy}</td>
                                </tr>
                                <tr>
                                    <td><b>Name:</b> {this.props.user.name}</td>

                                </tr>
                                <tr>

                                    <td>
                                        <center><b>${amount}</b></center>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <center>
                                            <StripeCheckout
                                                amount={amount * 100}
                                                billingAddress
                                                description="Book Hotel"
                                                image="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ll1qruerxzrg9gbqvi5r"
                                                locale="auto"
                                                name="RelexPay"
                                                label="Pay with 💳"
                                                stripeKey={apidata.stripeKey}
                                                token={this.onToken}
                                                zipCode
                                            />
                                        </center>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.data.globalObject.loginUser,
        hotels: state.data.globalObject.allHotels,
        hotelPicked: state.data.globalObject.hotelPicked,
        roomPicked: state.data.globalObject.roomPicked,
        dates: state.data.globalObject.dates,
        saved: state.data.globalObject.bookingSaved,
    }
}
export default connect(mapStateToProps, { saveBooking })(Confirmation);