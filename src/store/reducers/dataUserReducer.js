import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = { loggedIn: false };

const dataUserReducer = handleActions(
  {
    [actions.logOutAction]: () => ({ loggedIn: false }),
    [actions.userData]: (state, action) => ({
      ...action.payload,
      loggedIn: true,
    }),
  },
  initialState,
);

export default dataUserReducer;
