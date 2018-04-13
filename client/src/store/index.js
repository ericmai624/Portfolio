import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import app from "./app";
import projects from "./projects";

const reducer = combineReducers({
  app,
  projects
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
