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
// const likeReducer = handleActions(
//   {
//     [actions.loadArticlesList]: (state, { payload: articles }) => {
//       console.log(articles);
//       return articles;
//     },
//     [actions.setFavoriteSuccess](
//       state,
//       { payload: { article } },
//     ) {
//       const { slug, favorited, favoritesCount } = article;
//       const { articles, articlesCount } = state;
//       console.log(state);
//       articles.forEach((item) => {
//         if (slug === item.slug) {
//           item.favorited = favorited;
//           item.favoritesCount = favoritesCount;
//         }
//       });
//       return { articles, articlesCount };
//     },
//   },
//   [],
// );

const likeReducer = handleActions(
  {
    [actions.loadArticlesList]: (state, { payload: articles }) => articles,
    // [actions.setFavoriteSuccess]: (state, {payload: { article } }) => {
    //   const { slug, favorited, favoritesCount } = article;
    //   const { articles, articlesCount } = state;
    //   console.log(state);
    //   articles.forEach((item) => {
    //     if (slug === item.slug) {
    //       item.favorited = favorited;
    //       item.favoritesCount = favoritesCount;
    //     }
    //   });
    //   return { articles, articlesCount };
    // },
    // [actions.setFavoriteSuccess]: (state, { payload: { article: newArticle } }) => {
    //   // console.log(state);
    //   const articles = state.articles.map(article =>
    //     (article.slug === newArticle.slug ? newArticle : article)
    //   );
    //   console.log(articles);
    //   return { ...state, articles };
    // },
    // [actions.unsetFavoriteSuccess]: (state, { payload: { article: newArticle } }) => {
    //   const articles = state.articles.map(article =>
    //     (article.slug === newArticle.slug ? newArticle : article)
    //   );
    //   console.log(articles);
    //   return { ...state, articles };
    // },
  },
  [],
);

export default combineReducers({
  userReducer,
  buttonReducer,
  articlesReduser,
  likeReducer,
});
