import { createReducer } from "util";

const initState = {
  content: [],
  pending: null,
  fulfilled: null,
  rejected: null
};

const handler = {
  FETCH_PROJECTS_FULFILLED: (state, action) => ({
    ...state,
    content: action.payload,
    pending: false,
    fulfilled: true,
    rejected: false
  }),
  FETCH_PROJECTS_PENDING: state => ({
    ...state,
    pending: true,
    fulfilled: null,
    rejected: null
  }),
  FETCH_PROJECTS_REJECTED: state => ({
    ...state,
    pending: false,
    fulfilled: false,
    rejected: true
  })
};

const projects = createReducer(initState, handler);

export default projects;
