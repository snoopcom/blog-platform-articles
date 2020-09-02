import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const buttonReducer = handleActions(
  {
    [actions.isActive]: () => true,
    [actions.isInactive]: () => false,
  },
  false,
);

export default buttonReducer;
