import {combineReducers} from 'redux';
import botsReducer from './bots';

const reducers = {
  botsReducer,
};

const appReducer = () => combineReducers(reducers);

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
