import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Style';
import { articlesAction } from '../../store/actions';
import Article from './Article';

const Articles = () => {
  const dispatch = useDispatch();
  const articlesReducer = useSelector((state) => state.articlesReducer);
  const { articles } = articlesReducer;

  // console.log(articles);
  const loadArticles = async () => {
    await dispatch(articlesAction());
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const list = articles.map((article) => <Article key={article.slug} article={article} />);

  return (
    <Container>
      <div>{/* listArticles */}</div>
      <div>{list}</div>
    </Container>
  );
};

export default Articles;
