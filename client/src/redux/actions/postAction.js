import axios from "axios";
import apidata from '../../config.json';

export const LoginAction = (user, pass, logIn) => dispatch => {
  if (logIn) {
    axios({
      method: 'get',
      url: apidata.login,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      let found = response.data.find((element) => {
        return ((element.name === user) && (element.pass === pass));
      });
      if (found) {
        dispatch({ type: "LOGIN_USER", payload: found })
      }

      else {
        alert("User doesn't exist, Try Signing Up")
      }
    })
      .catch(function (error) {
        console.log("error in LoginAction action", error)
      });
  }
  else {
    dispatch({ type: "LOGIN_USER", payload: {} })
  }

}

export const SignupAction = (user, pass) => dispatch => {
  axios({
    method: 'post',
    url: apidata.signup,
    data: { "name": user, "pass": pass, "bookings": [] },
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    dispatch({ type: "SIGNUP_USER", payload: true })
    alert("User Created")
  })
    .catch(function (error) {
      console.log("error in SignupAction action", error)
    });
}

export const fetchHotels = () => dispatch => {
  axios({
    method: 'get',
    url: apidata.hotels,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    dispatch({ type: "FETCH_HOTELS", payload: response.data })
  })
    .catch(function (error) {
      console.log("error in fetchHotels action", error)
    });
}

export const selectHotel = (id) => dispatch => {
  dispatch({ type: "SELECT_HOTEL", payload: id })
}

export const selectRoom = (roomId) => dispatch => {
  dispatch({ type: "SELECT_ROOM", payload: roomId })
}

export const passDates = (dateObj) => dispatch => {
  dispatch({ type: "PASS_DATE", payload: dateObj })
}

export const saveBooking = (user, pass, bookings) => dispatch => {
  axios({
    method: 'get',
    url: apidata.login,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    let found = response.data.find((element) => {
      return ((element.name === user) && (element.pass === pass));
    });
    if (found) {
      axios({
        method: 'put',
        url: apidata.signup + '/' + found.id,
        data: { "name": user, "pass": pass, "bookings": bookings },
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => {
        dispatch({ type: "BOOKING_SAVED", payload: true })
      })
        .catch(function (error) {
          console.log("error in SignupAction action", error)
        });
    }
  })
    .catch(function (error) {
      console.log("error in LoginAction action", error)
    });



}

