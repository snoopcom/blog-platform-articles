import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDistance } from 'date-fns';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import {
  Container, Article, AuthorImage, Like,
} from './Style';
import {
  getArticles,
  setFavoriteArticle,
  setLikeArticle,
  unsetLikeArticle,
  unsetFavoriteArticle,
} from '../../store/actions';
// import Article from './Article';

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesReduser);
  // const userReducer = useSelector((state) => state.userReducer);

  /* проверка на авторизацию
  const isLogged = !!userReducer.email;
  console.log(isLogged); */

  // console.log(articles);

  /* пока оставим так */
  const handleLike = (slug, favorited) => {
    console.log(slug, favorited);
    if (favorited) {
      dispatch(setFavoriteArticle(slug));
      dispatch(setLikeArticle(favorited));
    }
    if (!favorited) {
      dispatch(unsetFavoriteArticle(slug));
      dispatch(unsetLikeArticle(false));
    }
  };

  /* извлекаем статьи */
  const listArticles = (
    <div>
      {articles
        ? articles.map(
          ({
            slug,
            title,
            tagList,
            author,
            description,
            createdAt,
            favoritesCount,
            favorited,
          }) => (
            <Article key={slug}>
              <h3>{title}</h3>
              <h4>{author.username}</h4>
              <span>{description}</span>
              <div>
                {tagList.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
              <AuthorImage src={author.image} alt="img" />
              <span>{formatDistance(new Date(createdAt), Date.now())}</span>
              <br />
              <Like onClick={() => handleLike(slug, favorited)}>
                {favorited ? <HeartFilled /> : <HeartOutlined />}
              </Like>
              <br />
              {favoritesCount}
            </Article>
          ),
        )
        : null}
    </div>
  );

  const loadArticles = async () => {
    await dispatch(getArticles());
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <Container>
      <div>{listArticles}</div>
    </Container>
  );
};

export default Articles;
