import { createAction } from 'redux-actions';
import {
  userRequest,
  loginRequest,
  signUpRequest,
  getArticlesRequest,
  setFavoriteRequest,
  unsetFavoriteRequest,
} from '../api/index';

// Функция createAction принимает тип действия
// (свойство type) и возвращает функцию, принимающую payload
export const logAction = createAction('LOGIN_USER');
export const logOutAction = createAction('LOGOUT_USER');

export const isActive = createAction('ACTIVE_BUTTON');
export const isInactive = createAction('OUT_BUTTON');

export const loadArticlesList = createAction('LOAD_ARTICLES_LIST');
export const setLikeArticle = createAction('SET_LIKE_ARTICLE');
export const unsetLikeArticle = createAction('SET_LIKE_ARTICLE');

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
registration();

/* articles */
export const getArticles = () => async (dispatch) => {
  const response = await getArticlesRequest();
  const { data } = response;
  dispatch(loadArticlesList(data));
  return response;
};

/* like */
export const setFavoriteArticle = (slug, favorited) => async () => {
  const response = await setFavoriteRequest(slug, favorited);
  return response;
};

export const unsetFavoriteArticle = (slug, favorited) => async () => {
  const response = await unsetFavoriteRequest(slug, favorited);
  return response;
};
