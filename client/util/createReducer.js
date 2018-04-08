const createReducer = (initState, handlers) => (state = initState, action) => {
  if (typeof handlers[action.type] === 'function') {
    return handlers[action.type](state, action);
  }
  return state;
};

export default createReducer;
