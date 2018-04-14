import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import app from "./app";
import projects from "./projects";

const reducer = combineReducers({
  app,
  projects
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
