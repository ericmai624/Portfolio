import { createReducer } from 'util';

const initState = {
  bgColor: '#000',
  fontColor: '#fff',
  isVisible: false
};

const handler = {
  BACKGROUND_CHANGE_TRIGGERED: state => ({
    ...state,
    bgColor: '#fff',
    fontColor: '#000',
    isVisible: true
  })
};

const styles = createReducer(initState, handler);

export default styles;
