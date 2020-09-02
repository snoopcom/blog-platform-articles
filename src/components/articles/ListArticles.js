import React from 'react';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';
import {
  AllListArticles,
  ArticleContainer,
  AuthorImage,
  Title,
  LikeContainer,
  UsetContainer,
  Header,
  DataUser,
} from './Style';
import Like from './Like';
import { addOneArticleAction } from '../../store/actions';

const ListArticles = ({ article }) => {
  // const dispatch = useDispatch();

  const {
    slug,
    title,
    tagList,
    author,
    description,
    createdAt,
    favoritesCount,
    // favorited,
  } = article;

  // console.log(tagList);

  const handleTest = (data) => {
    // console.log(slug);
    addOneArticleAction(data);
  };

  return (
    <AllListArticles key={slug}>
      <Header>
        <ArticleContainer>
          <NavLink to={`/articles/${slug}`} onClick={() => handleTest(slug)}>
            <Title>{title}</Title>
          </NavLink>
          <LikeContainer>
            <Like article={article} />
            {favoritesCount}
          </LikeContainer>
        </ArticleContainer>
        <UsetContainer>
          <DataUser>
            <h4>{author.username}</h4>
            <span>{formatDistance(new Date(createdAt), Date.now())}</span>
          </DataUser>
          <AuthorImage src={author.image} alt="img" />
        </UsetContainer>
      </Header>
      <span>{description}</span>
      <div>
        Теги:
        {tagList.map((tag) => (
          <span key={uniqueId()}>{tag}</span>
        ))}
      </div>

      <br />
    </AllListArticles>
  );
};

ListArticles.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

export default ListArticles;
