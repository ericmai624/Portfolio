import { createReducer } from "util";

const initState = {
  FontAwesomeIcon: null
};

const handler = {
  LAZYLOAD_FA_MODULES: (state, action) => ({
    ...state,
    FontAwesomeIcon: action.payload
  })
};

const fontawesome = createReducer(initState, handler);

export default fontawesome;
