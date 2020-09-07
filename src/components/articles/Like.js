import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { HeartTwoTone } from '@ant-design/icons';
import { setFavoriteArticle, unsetFavoriteArticle, isInactive } from '../../store/actions';

const Like = ({ article }) => {
  const dispatch = useDispatch();
  const { favorited, slug } = article;

  const setLike = () => {
    try {
      const response = dispatch(setFavoriteArticle(slug));
      dispatch(isInactive()); // делаем активным логин
      console.log(response);
      if (response) {
        throw console.log('hello');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLike = () => dispatch(unsetFavoriteArticle(slug));

  return (
    <div>
      <HeartTwoTone
        twoToneColor={favorited ? 'red' : '#52c41a'}
        onClick={favorited ? deleteLike : setLike}
      />
    </div>
  );
};

Like.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

export default Like;
