import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Wrapper } from './Style';

const FormComponent = (Component) => {
  const WrapperContainer = () => {
    const { slug } = useParams();
    const getArticles = useSelector((state) => state.articlesReducer);
    const { articles } = getArticles;
    const currentArticle = articles.find((article) => article.slug === slug);

    return (
      <Wrapper>
        <Component currentArticle={currentArticle} />
      </Wrapper>
    );
  };

  return WrapperContainer;
};

export default FormComponent;
