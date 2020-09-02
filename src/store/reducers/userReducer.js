import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const userReducer = handleActions(
  {
    [actions.logOutAction]: () => {},
    [actions.logAction]: (state, action) => action.payload,
  },
  {},
);

export default userReducer;
