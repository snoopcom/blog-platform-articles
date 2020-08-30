import axios from 'axios';

export const baseUrl = 'https://conduit.productionready.io/api/';

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
  const url = `${baseUrl}user`;
  const response = await api.get(url);
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

  const url = `${baseUrl}users/login`;
  const response = await axios.post(url, data);
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
  const url = `${baseUrl}users`;
  const response = await axios.post(url, data);
  return response;
};

/* like */
export const addFavoriteRequest = async (slug) => {
  const url = `${baseUrl}articles/${slug}/favorite`;
  const response = await api.post(url);
  return response;
};

export const deleteFavoriteRequest = async (slug) => {
  const url = `${baseUrl}articles/${slug}/favorite`;
  const response = await api.delete(url);
  return response;
};

/* articles */
export const getArticlesRequest = async (params) => {
  const url = `${baseUrl}articles?limit=10`;
  const response = await api.get(url, { params });
  return response.data;
};

/* test-add */
export const addArticle = async (articleInfo) => {
  const response = await api.post('/articles', { article: articleInfo });
  const {
    data: { article },
  } = response;
  return article;
};
