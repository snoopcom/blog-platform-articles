import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  currentPage: {},
};

const pageReducer = handleActions(
  {
    [actions.setCurrentPage]: (state, { payload }) => console.log({ payload }),
  },
  initialState,
);

export default pageReducer;
