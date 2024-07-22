import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  // other reducers...
});

export default rootReducer;