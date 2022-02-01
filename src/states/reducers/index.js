import { combineReducers } from 'redux';
import response from './response';
import user from './user';
import products from './products';
import plans from './plans';

export default combineReducers({
  response,
  user,
  products,
  plans,
});
