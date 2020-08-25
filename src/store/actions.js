import { createAction } from 'redux-actions';
import {
  userRequest,
  loginRequest,
  signUpRequest,
  getArticlesRequest,
  addFavoriteRequest,
  deleteFavoriteRequest,
} from '../api/index';

// Функция createAction принимает тип действия
// (свойство type) и возвращает функцию, принимающую payload

/* user */
export const logAction = createAction('LOGIN_USER');
export const logOutAction = createAction('LOGOUT_USER');

export const isActive = createAction('ACTIVE_BUTTON');
export const isInactive = createAction('OUT_BUTTON');

/* articles */
export const loadArticlesList = createAction('LOAD_ARTICLES_LIST');
export const loadAllArticles = createAction('LOAD_ARTICLES_LIST');
export const setLikeArticle = createAction('SET_LIKE_ARTICLE');
export const unsetLikeArticle = createAction('SET_LIKE_ARTICLE');

/* like */
export const setFavoriteRequest = createAction('SET_FAVORITE_REQUEST');
export const setFavoriteSuccess = createAction('SET_FAVORITE_SUCCESS');
export const setFavoriteFailure = createAction('SET_FAVORITE_FAILURE');

export const unsetFavoriteRequest = createAction('UNSET_FAVORITE_REQUEST');
export const unsetFavoriteSuccess = createAction('UNSET_FAVORITE_SUCCESS');
export const unsetFavoriteFailure = createAction('UNSET_FAVORITE_FAILURE');

/* user */
export const getUser = () => async () => {
  const response = await userRequest();
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

/* articles */
export const getArticles = () => async (dispatch) => {
  const response = await getArticlesRequest();
  const { data } = response;
  // console.log(data)
  dispatch(loadArticlesList(data));
  return response;
};

/* like */
export const setFavoriteArticle = (slug) => async (dispatch) => {
  dispatch(setFavoriteRequest());
  try {
    const response = await addFavoriteRequest(slug);
    dispatch(setFavoriteSuccess(response.data));
    // console.log(response);
  } catch (error) {
    dispatch(setFavoriteFailure(error.response));
    console.log(error);
  }
};

export const unsetFavoriteArticle = (slug) => async (dispatch) => {
  dispatch(unsetFavoriteRequest());
  try {
    const response = await deleteFavoriteRequest(slug);
    dispatch(unsetFavoriteArticle(response.data));
    // console.log(response);
  } catch (error) {
    dispatch(unsetFavoriteFailure(error.response));
  }
};
