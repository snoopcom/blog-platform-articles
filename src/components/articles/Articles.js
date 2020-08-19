import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Article } from './Style';
import { getArticles } from '../../store/actions';

const Articles = () => {
  const dispatch = useDispatch();
  const articlesReduser = useSelector((state) => state.articlesReduser);

  const currentArticle = articlesReduser[0];
  let getData;
  if (currentArticle) {
    getData = currentArticle;
    const { title } = getData;
    console.log(title);
  }
  if (!currentArticle) {
    getData = null;
  }
  console.log(getData);

  const articles = async () => {
    await dispatch(getArticles());
  };

  useEffect(() => {
    articles();
  }, []);

  return (
    <Container>
      <Article>Test</Article>
    </Container>
  );
};

export default Articles;
