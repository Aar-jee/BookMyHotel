import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookingConfirmed extends Component {

    render() {
        return (
            <div className="confirmationCheckout">
                <h1><center>PAYMENT SUCCESSFUL</center></h1>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th colSpan="5"><h5>We are pleased to inform you that your booking has been received and confirmed.</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.user && this.props.user.bookings.map((booking, i) =>
                                <tr key={i}>
                                    <td>Booking: {booking.id}</td>
                                    <td>Email: {booking.email}</td>
                                    <td>Card: ${booking.brand}</td>
                                    <td>Type: {booking.funding}</td>
                                </tr>
                            )

                        }

                    </tbody>

                </table>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.data.globalObject.loginUser
    }
}
export default connect(mapStateToProps, {})(BookingConfirmed);