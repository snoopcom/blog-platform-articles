import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import pageSettingsReducer from './pageSettingsReducer';
import userReducer from './userReducer';
import buttonReducer from './buttonReducer';
import dataUserReducer from './dataUserReducer';

export default combineReducers({
  articlesReducer,
  userReducer,
  dataUserReducer,
  buttonReducer,
  pageSettingsReducer,
});
