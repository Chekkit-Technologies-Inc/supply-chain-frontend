import { combineReducers } from 'redux';
import response from './response';
import user from './user';
import warehouses from './warehouses';
import sites from './sites';
import hardwares from './hardwares';
import assets from './assets';
import questions from './questions';

export default combineReducers({
  response,
  user,
  warehouses,
  sites,
  hardwares,
  assets,
  questions,
});
