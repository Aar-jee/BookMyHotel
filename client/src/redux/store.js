
import rootReducer from "./reducers"
import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"
const middleware = [thunk];
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store