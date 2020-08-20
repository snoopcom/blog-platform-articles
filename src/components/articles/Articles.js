import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDistance } from 'date-fns';
// import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import {
  Container, Article, AuthorImage, Like,
} from './Style';
import { getArticles, setFavoriteArticle } from '../../store/actions';
// import Article from './Article';

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesReduser);
  // const userName = useSelector((state) => state.userReducer);

  console.log(articles);

  /* пока оставим так */
  const handleLike = (slug) => {
    console.log(slug);
    dispatch(setFavoriteArticle(slug));
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
            createdAt /* favoritesCount,favorited, */,
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
              <Like onClick={() => handleLike(slug)}>
                <Button>like</Button>
              </Like>
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
