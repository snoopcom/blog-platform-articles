export const baseUrl = 'https://conduit.productionready.io/api/';

export const userPostUrl = () => `${baseUrl}user`;
export const userLoginUrl = () => `${baseUrl}users/login`;
export const userSignUpUrl = () => `${baseUrl}users`;
export const setFavoriteArticleUrl = (slug) => `${baseUrl}articles/${slug}/favorite`;
export const deleteFavoriteArticleUrl = (slug) => `${baseUrl}articles/${slug}/favorite`;
export const getArticlesListUrl = () => `${baseUrl}articles?limit=10`;
export const getArticlePostUrl = (slug) => `${baseUrl}articles/${slug}`;
export const addArticlePostUrl = () => `${baseUrl}articles`;
export const articleEditUrl = (slug) => `${baseUrl}articles/${slug}`;
export const articleDeleteUrl = (slug) => `${baseUrl}articles/${slug}`;
