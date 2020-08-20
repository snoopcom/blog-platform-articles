import { createAction } from 'redux-actions';
import {
  userRequest,
  loginRequest,
  signUpRequest,
  getArticlesRequest,
  setFavoriteRequest,
} from '../api/index';

// Функция createAction принимает тип действия
// (свойство type) и возвращает функцию, принимающую payload
export const logAction = createAction('LOGIN_USER');
export const logOutAction = createAction('LOGOUT_USER');

export const isActive = createAction('ACTIVE_BUTTON');
export const isInactive = createAction('OUT_BUTTON');

export const loadArticlesList = createAction('LOAD_ARTICLES_LIST');

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
export const setFavoriteArticle = (slug) => async () => {
  const response = await setFavoriteRequest(slug);
  console.log(response);
  return response;
};
