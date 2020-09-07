import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { HeartTwoTone } from '@ant-design/icons';
import { setFavoriteArticle, unsetFavoriteArticle, isInactive } from '../../store/actions';

const Like = ({ article }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { favorited, slug } = article;

  const setLike = async () => {
    try {
      dispatch(setFavoriteArticle(slug));
      dispatch(isInactive()); // делаем активным логин
    } catch (error) {
      console.log(error.response);
      history.push('/login');
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
