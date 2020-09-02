import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const dataUserReducer = handleActions(
  {
    [actions.userData]: (state, action) => action.payload,
  },
  {},
);

export default dataUserReducer;
