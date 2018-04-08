import { createReducer } from 'util';

const initState = {
  bgColor: '#fff',
  fontColor: '#000',
  isVisible: false
};

const handler = {
  BACKGROUND_CHANGE_TRIGGERED: state => ({
    ...state,
    bgColor: '#000',
    fontColor: '#fff',
    isVisible: true
  })
};

const styles = createReducer(initState, handler);

export default styles;
