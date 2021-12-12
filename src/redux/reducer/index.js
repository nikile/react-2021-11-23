import { combineReducers } from 'redux';
import menu from './menu';
import order from './order';

export default combineReducers({
  order,
  menu,
});
