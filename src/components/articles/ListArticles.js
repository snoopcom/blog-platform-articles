import React from 'react';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';
import { ListArticles, AuthorImage } from './Style';
import Like from './Like';
import { addOneArticleAction } from '../../store/actions';

const allListArticles = ({ article }) => {
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

  // /* пока оставим так */
  // const handleLike = (slug, favorited) => {
  //   // console.log(slug, favorited);
  //   if (favorited) {
  //     dispatch(unsetFavoriteArticle(slug));
  //     dispatch(unsetLikeArticle(false));
  //   }
  //   if (!favorited) {
  //     dispatch(setFavoriteArticle(slug));
  //     dispatch(setLikeArticle(favorited));
  //   }
  // };
  const handleTest = (data) => {
    // console.log(slug);
    addOneArticleAction(data);
  };

  return (
    <ListArticles key={slug}>
      <NavLink to={`/articles/${slug}`} onClick={() => handleTest(slug)}>
        <h3>{title}</h3>
      </NavLink>
      <h4>{author.username}</h4>
      <span>{description}</span>
      <div>
        {tagList.map((tag) => (
          <span key={uniqueId()}>{tag}</span>
        ))}
      </div>
      <AuthorImage src={author.image} alt="img" />
      <span>{formatDistance(new Date(createdAt), Date.now())}</span>
      <br />
      <Like article={article} />
      {favoritesCount}
    </ListArticles>
  );
};

allListArticles.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

export default allListArticles;
