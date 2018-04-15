import { createReducer } from "util";

const initState = {
  isReady: false,
  FontAwesomeIcon: null
};

const handler = {
  LAZYLOAD_FA_MODULES: (state, action) => ({
    ...state,
    isReady: true,
    FontAwesomeIcon: action.payload
  })
};

const fontawesome = createReducer(initState, handler);

export default fontawesome;
