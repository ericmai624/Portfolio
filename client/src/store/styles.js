import { createReducer } from 'util';

const initState = {
  fontColor: '#fff',
  isVisible: false
};

const handler = {
  BACKGROUND_CHANGE_TRIGGERED: () => ({
    fontColor: '#000',
    isVisible: true
  })
};

const styles = createReducer(initState, handler);

export default styles;
