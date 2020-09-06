// import axios from 'axios';
import { createAction } from 'redux-actions';
// import { useHistory } from 'react-router-dom';
import {
  userRequest,
  loginRequest,
  signUpRequest,
  getArticlesRequest,
  addFavoriteRequest,
  deleteFavoriteRequest,
  addArticleRequest,
  getOneArticleRequest,
  editArticleRequest,
  deleteArticleRequest,
} from '../api/index';

// Функция createAction принимает тип действия
// (свойство type) и возвращает функцию, принимающую payload

/* user */
export const userData = createAction('USER_DATA');
export const logAction = createAction('LOGIN_USER');
export const logOutAction = createAction('LOGOUT_USER');

export const isActive = createAction('ACTIVE_BUTTON');
export const isInactive = createAction('OUT_BUTTON');

/* articles */
export const loadArticlesList = createAction('LOAD_ARTICLES_LIST');
export const loadAllArticles = createAction('LOAD_ARTICLES_LIST');
export const setLikeArticle = createAction('SET_LIKE_ARTICLE');
export const unsetLikeArticle = createAction('SET_LIKE_ARTICLE');
export const setCurrentPage = createAction('SET_CURRENT_PAGE');

/* like */
export const setFavoriteRequest = createAction('SET_FAVORITE_REQUEST');
export const setFavoriteSuccess = createAction('SET_FAVORITE_SUCCESS');
export const setFavoriteFailure = createAction('SET_FAVORITE_FAILURE');

export const unsetFavoriteRequest = createAction('UNSET_FAVORITE_REQUEST');
export const unsetFavoriteSuccess = createAction('UNSET_FAVORITE_SUCCESS');
export const unsetFavoriteFailure = createAction('UNSET_FAVORITE_FAILURE');

export const articlesRequest = createAction('ARTICLES_REQUEST');
export const articlesSuccess = createAction('ARTICLES_SUCCESS');
export const articlesFailure = createAction('ARTICLES_FAILURE');

export const setArticlesParams = createAction('SET_ARTICLES_PARAMS');
export const changePage = createAction('CHANGE_CURRENT_PAGE');

/* articles */
export const articlesAction = (params) => async (dispatch) => {
  dispatch(articlesRequest());
  try {
    const response = await getArticlesRequest(params);
    const { articles, articlesCount } = response;
    // dispatch(setArticlesParams(params))
    dispatch(articlesSuccess({ articles, articlesCount }));
  } catch (error) {
    dispatch(articlesFailure(error.response));
  }
};

export const changePageAction = (pageNumber) => async (dispatch) => {
  dispatch(changePage({ pageNumber }));
};

// ------------------ articlePostFetch ----------------------
// export const articlePostFetch = (article /*, setFieldError*/) => async (dispatch) => {
//   // dispatch(changeLoadingStatus(true));
//   try {
//   // const url = routes.articlePostUrl();
//   // console.log(url);
//   await axios.post('https://conduit.productionready.io/api/articles', { article });
//   // dispatch(changeLoadingStatus(false));
//   } catch (err) {
//   // const { errors } = response.data;
//   // dispatch(changeFetchStatus(errors));
//   // dispatch(changeLoadingStatus(false));
//   // setFieldError('title', errors.title);
//   // setFieldError('description', errors.description);
//   // setFieldError('body', errors.body);
//    console.log(err.response);
//   }
// };

// /* articles */
// export const getArticles1 = () => async (dispatch) => {
//   const response = await getArticlesRequest();
//   dispatch(loadArticlesList(response));
//   return response;
// };
// // getArticles1();

/* user */
export const getUser = () => async (dispatch) => {
  const response = await userRequest();
  dispatch(userData(response.data.user));
  // console.log(response.data.user);
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response;
};

export const authorization = (values) => async () => {
  const response = await loginRequest(values);
  return response;
};

export const registration = (values) => async () => {
  const response = await signUpRequest(values);
  return response;
};

/* like */
export const setFavoriteArticle = (slug) => async (dispatch) => {
  dispatch(setFavoriteRequest());
  try {
    const response = await addFavoriteRequest(slug);
    // console.log(response.data);
    dispatch(setFavoriteSuccess(response.data));
  } catch (error) {
    dispatch(setFavoriteFailure(error.response));
    window.history.go(-1);
    console.log(error);
  }
};

export const unsetFavoriteArticle = (slug) => async (dispatch) => {
  dispatch(unsetFavoriteRequest());
  try {
    const response = await deleteFavoriteRequest(slug);
    dispatch(unsetFavoriteSuccess(response.data));
  } catch (error) {
    dispatch(unsetFavoriteFailure(error.response));
    console.log(error);
  }
};

/* add article */
export const addArticleAction = async (article) => {
  // dispatch(addArticleRequest());
  try {
    await addArticleRequest({ article });
    // dispatch(addArticleSuccess({ article }));
    // history.push('/articles');
    // return response;
  } catch (error) {
    // dispatch(addArticleFailure(err.response));
  }
};

/* get one article */
export const addOneArticleAction = async (slug) => {
  try {
    await getOneArticleRequest(slug);
  } catch (error) {
    console.log(error);
  }
};

/* edit article */
export const editArticleAction = async (values, slug) => {
  try {
    await editArticleRequest(values, slug);
  } catch (error) {
    console.log(error);
  }
};

/* delete article */
export const deleteArticleAction = async (slug) => {
  try {
    await deleteArticleRequest(slug);
  } catch (error) {
    console.log(error);
  }
};
