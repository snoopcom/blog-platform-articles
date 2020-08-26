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
/* button */
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
};
/* articles */
const articlesReducer = handleActions(
  {
    /* ------------ */
    // [actions.setFavoriteSuccess]: (state, {
    //   payload: { article: newArticle },
    // }) => {
    //   // console.log({ article: newArticle });
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

    /* добавили в стейт массив со статьями и счетчик статей */
    [actions.articlesSuccess]: (state, { payload: { articles, articlesCount } }) => ({
      articles,
      articlesCount,
    }),

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
