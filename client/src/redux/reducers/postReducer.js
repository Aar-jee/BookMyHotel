import { LOGIN_USER, SIGNUP_USER, FETCH_HOTELS, SELECT_HOTEL, SELECT_ROOM, PASS_DATE, BOOKING_SAVED } from '../actions/types'
const addDays = (theDate, days) => {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}
const initialState = {
    globalObject:
    {
        loginUser: {
            name: '',
            pass: '',
            bookings: []
        },
        allHotels: [],
        signedUp: false,
        hotelPicked: "",
        roomPicked: "",
        dates: {
            bookingStartDate: new Date(),
            bookingEndDate: addDays(new Date(), 1),
            stay: 0
        },
        bookingSaved: false
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            const loginObj = { ...state.globalObject };
            loginObj.loginUser = action.payload
            return {
                ...state,
                globalObject: loginObj
            }
        case SIGNUP_USER:
            const signupObj = { ...state.globalObject };
            signupObj.signedUp = action.payload
            return {
                ...state,
                globalObject: signupObj
            }
        case FETCH_HOTELS:
            const fetchHotelsObj = { ...state.globalObject };
            fetchHotelsObj.allHotels = action.payload
            return {
                ...state,
                globalObject: fetchHotelsObj
            }
        case SELECT_HOTEL:
            const selectHotelObj = { ...state.globalObject };
            selectHotelObj.hotelPicked = action.payload
            return {
                ...state,
                globalObject: selectHotelObj
            }
        case SELECT_ROOM:
            const selectRoomObj = { ...state.globalObject };
            selectRoomObj.roomPicked = action.payload
            return {
                ...state,
                globalObject: selectRoomObj
            }
        case PASS_DATE:
            const dateObj = { ...state.globalObject };
            dateObj.dates = action.payload
            return {
                ...state,
                globalObject: dateObj
            }
        case BOOKING_SAVED:
            const bookObj = { ...state.globalObject };
            bookObj.bookingSaved = action.payload
            return {
                ...state,
                globalObject: bookObj
            }
        default:
            return state;
    }
}
