import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import pageSettingsReducer from './pageSettingsReducer';
import buttonReducer from './buttonReducer';
import dataUserReducer from './dataUserReducer';

export default combineReducers({
  articlesReducer,
  dataUserReducer,
  buttonReducer,
  pageSettingsReducer,
});
