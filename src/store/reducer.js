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
  currentPage: 1,
  pageSize: 10,
  params: { limit: 10 },
};
/* articles */
const articlesReducer = handleActions(
  {
    /* добавили в стейт массив со статьями и счетчик статей */
    [actions.articlesSuccess]: (state, { payload: { articles, articlesCount } }) => ({
      ...state,
      articles,
      articlesCount,
    }),
    [actions.articlesFailure]: (state) => ({ ...state, articles: [] }),
    [actions.setArticlesParams]: (state, { payload: { params } }) => ({ ...state, params }),

    // /* поствавить/убрать лайк */
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

    // [actions.articlesSuccess]: (state, { payload: { articles, articlesCount } }) => ({
    //   articles,
    //   articlesCount,
    // }),

    // [actions.articlesRequest](state) {
    //   return { ...state, isLoading: true };
    // },
    // [actions.articlesFailure](state) {
    //   return { ...state, articles: [] };
    // },

    // [actions.articlesRequest](state) {
    //   return { ...state, isLoading: true };
    // },
  },
  initialState,
);

const initialState2 = { currentPage: 1, pageSize: 10 }; // поменять название!!!

const pageSettingsReducer = handleActions(
  {
    [actions.changePage](state, { payload: { pageNumber } }) {
      return { ...state, currentPage: pageNumber };
    },
  },
  initialState2,
);

export default combineReducers({
  articlesReducer,
  userReducer,
  buttonReducer,
  pageSettingsReducer,
});
