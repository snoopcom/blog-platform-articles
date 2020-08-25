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
    // [actions.setFavoriteSuccess]: (state, {/* payload: { article }*/ }) => {
    //    const { slug, favorited, favoritesCount } = article;
    //   const { articles, articlesCount } = state;
    //   console.log(1111111111, favoritesCount, slug, articles);
    //   articles.forEach((item) => {
    //     if (slug === item.slug) {
    //       item.favorited = favorited;
    //       item.favoritesCount = favoritesCount;
    //     }
    //   });
    //   return { articles, articlesCount };
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
