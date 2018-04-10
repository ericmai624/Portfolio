import { createStore, combineReducers } from "redux";
// import logger from 'redux-logger';

import app from "./app";

const reducer = combineReducers({
  app
});

const store = createStore(reducer);

export default store;
