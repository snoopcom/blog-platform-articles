import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import pageSettingsReducer from './pageSettingsReducer';
import userReducer from './userReducer';
import buttonReducer from './buttonReducer';
import dataUserReducer from './dataUserReducer';
import pageReducer from './pageReducer';

export default combineReducers({
  articlesReducer,
  userReducer,
  dataUserReducer,
  buttonReducer,
  pageSettingsReducer,
  pageReducer,
});
