import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

/* user */
const userReducer = handleActions(
  {
    [actions.logOutAction]: () => {},
    [actions.logAction]: (state, action) => action.payload,
  },
  {},
);
const buttonReducer = handleActions(
  {
    [actions.isActive]: () => true,
    [actions.isInactive]: () => false,
  },
  false,
);

/* articles */
const articlesReduser = handleActions(
  {
    [actions.loadArticlesList]: (state, { payload }) => payload.articles,
  },
  [],
);

/* like */
const likeReducer = handleActions(
  {
    [actions.setLikeArticle]: () => true,
    [actions.unsetLikeArticle]: () => false,
  },
  false,
);

export default combineReducers({
  userReducer,
  buttonReducer,
  articlesReduser,
  likeReducer,
});
