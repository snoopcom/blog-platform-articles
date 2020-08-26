import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
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

const initialState = {
  articles: [],
  articlesCount: 0,
  isLoading: false,
  params: { limit: 10 },
};

/* articles */
const articlesReducer = handleActions(
  {
    // /* ------------ */
    // [actions.setFavoriteSuccess]: (state, {
    //   payload: { article: newArticle },
    // }) => {
    //   const articles = state.articles.map(
    //     (article) => (article.slug === newArticle.slug ? newArticle : article),
    //   );
    //   return { ...state, articles };
    // },
    // [actions.unsetFavoriteSuccess]: (state, { payload: { article: newArticle } }) => {
    //   const articles = state.articles.map(
    //     (article) => (article.slug === newArticle.slug ? newArticle : article),
    //   );
    //   return { ...state, articles };
    // },
    // /* ------------ */
    // [actions.articlesSuccess]: (state, { payload: { articles, articlesCount } }) => ({
    //   ...state, articles, articlesCount, isLoading: false,
    // }),
    // [actions.articlesRequest](state) {
    //   return { ...state, isLoading: true };
    // },
    // [actions.articlesFailure](state) {
    //   return { ...state, articles: [] };
    // },
  },
  initialState,
);

export default combineReducers({
  articlesReducer,
  userReducer,
  buttonReducer,
});
