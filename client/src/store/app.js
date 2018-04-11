import { createReducer } from "util";

// const initState = {
//   fontColor: "#fff",
//   isBlackBg: true,
//   displayGreeting: true
// };

const initState = {
  fontColor: "#000",
  isBlackBg: false,
  displayGreeting: false
};

const handler = {
  BACKGROUND_CHANGE_TRIGGERED: state => ({
    ...state,
    fontColor: "#000",
    isBlackBg: false
  }),
  HIDE_GREETING: state => ({ ...state, displayGreeting: false })
};

const app = createReducer(initState, handler);

export default app;
