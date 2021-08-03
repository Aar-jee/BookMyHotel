import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from "react-datepicker";
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { LoginAction, passDates } from '../redux/actions/postAction';
import { Link } from "react-router-dom";

class StayDates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: this.props.dateProps.bookingStartDate,
            endDate: this.props.dateProps.bookingEndDate,
        }
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.addDays = this.addDays.bind(this);
    }


    addDays(theDate, days) {
        return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }
    nextButtonClickHandler = () => {
        let bookingDates = { bookingStartDate: this.state.startDate, bookingEndDate: this.state.endDate, stay: moment(this.state.endDate).diff(moment(this.state.startDate), 'days') };
        this.props.passDates(bookingDates)
    }

    render() {
        let minCheckIn = new Date()
        let maxCheckIn = this.addDays(new Date(), 6)
        let minCheckout = this.addDays(this.state.startDate, 1)
        let maxCheckOut = this.addDays(minCheckout, 6)
        return (
            <div className="login-box">
                <div className="duration-wrapper dateContainer">
                    <div className="form-group date-calender">
                        <span>CheckIn</span>

                        <DatePicker
                            selected={this.state.startDate}
                            selectsStart
                            showMonthDropdown
                            minDate={minCheckIn}
                            maxDate={maxCheckIn}
                            startDate={this.state.startDate}
                            onChange={this.handleChangeStart}
                        />
                        <span>CheckOut</span>

                        <DatePicker
                            selected={this.state.endDate}
                            selectsEnd
                            showMonthDropdown
                            minDate={minCheckout}
                            maxDate={maxCheckOut}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                        />
                        <i className="far fa-calendar-alt"></i>
                    </div>
                    <div className="button-wrapper">
                        <Link className="linkTo" to={{
                            pathname: "/confirmation",
                        }}
                        >
                            <Button
                                disabled={this.state.startDate === this.state.endDate}
                                type="button"
                                className="btn-primary"
                                onClick={this.nextButtonClickHandler}>Next
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.data.globalObject.loginUser,
        dateProps: state.data.globalObject.dates
    }
}

export default connect(mapStateToProps, { LoginAction, passDates })(StayDates);

