import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import styles from './styles';

const reducer = combineReducers({
  styles
});

const store = createStore(reducer);

export default store;
