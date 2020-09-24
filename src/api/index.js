import axios from 'axios';

import {
  userPostUrl,
  userLoginUrl,
  userSignUpUrl,
  setFavoriteArticleUrl,
  deleteFavoriteArticleUrl,
  getArticlesListUrl,
  getArticlePostUrl,
  addArticlePostUrl,
  articleEditUrl,
  articleDeleteUrl,
} from './routes';

export const api = axios.create();

/* user */
api.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    const userConfig = req;
    userConfig.headers.Authorization = `Token ${token}`;
    return userConfig;
  }
  return req;
});

export const userRequest = async () => {
  const response = await api.get(userPostUrl());
  return response;
};

export const loginRequest = async (values) => {
  const { email, password } = values;
  const data = {
    user: {
      email,
      password,
    },
  };
  const response = await axios.post(userLoginUrl(), data);
  return response;
};

export const signUpRequest = async (values) => {
  const { username, email, password } = values;
  const data = {
    user: {
      username,
      email,
      password,
    },
  };
  const response = await axios.post(userSignUpUrl(), data);
  return response;
};

/* like */
export const addFavoriteRequest = async (slug) => {
  const response = await api.post(setFavoriteArticleUrl(slug));
  return response;
};

export const deleteFavoriteRequest = async (slug) => {
  const response = await api.delete(deleteFavoriteArticleUrl(slug));
  return response;
};

/* articles */
export const getArticlesRequest = async (params) => {
  const response = await api.get(getArticlesListUrl(), { params });
  return response.data;
};

/* article */
export const getArticleRequest = async (slug) => {
  const response = api.get(getArticlePostUrl(slug));
  return response;
};

/* add article */
export const addArticleRequest = async (values) => {
  const response = await api.post(addArticlePostUrl(), values);
  return response;
};

/* edit article */
export const editArticleRequest = async (values, slug) => {
  const response = await api.put(articleEditUrl(slug), values);
  console.log(response);
  return response;
};

/* delete article */
export const deleteArticleRequest = async (slug) => {
  const response = await api.delete(articleDeleteUrl(slug));
  return response;
};
