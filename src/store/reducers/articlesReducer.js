import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  currentUser: {},
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
    // [actions.setArticlesParams]: (state, { payload: { params } }) => {
    //   console.log(params);
    //   return { ...state, params }
    // },
    // ({ ...state, params }),

    /* поствавить/убрать лайк */
    [actions.setFavoriteSuccess]: (state, { payload: { article: newItem } }) => {
      const articles = state.articles.map((item) => (item.slug === newItem.slug ? newItem : item));
      return { ...state, articles };
    },
    [actions.unsetFavoriteSuccess]: (state, { payload: { article: newItem } }) => {
      const articles = state.articles.map((item) => (item.slug === newItem.slug ? newItem : item));
      return { ...state, articles };
    },
    // [actions.setCurrentPage]: (state, { payload }) => {
    //  console.log({ payload });
    //   // state.currentPage = payload;
    // },
  },
  initialState,
);

export default articlesReducer;
