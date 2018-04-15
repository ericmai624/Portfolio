import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import app from "./app";
import projects from "./projects";
import fontawesome from "./fontawesome";

const reducer = combineReducers({
  app,
  projects,
  fontawesome
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
