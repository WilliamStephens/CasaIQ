import { combineReducers } from 'redux';
import deviceReducer from './deviceReducer';

const deviceApp = combineReducers({
  deviceReducer,
});

export default deviceApp;

