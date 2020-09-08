import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { HeartTwoTone } from '@ant-design/icons';
import { setFavoriteArticle, unsetFavoriteArticle, isInactive } from '../../store/actions';
// import history from '../../history';

const Like = ({ article }) => {
  const history = useHistory();
  const user = useSelector((state) => state.dataUserReducer);
  const dispatch = useDispatch();
  const { favorited, slug } = article;

  const setLike = async () => {
    try {
      dispatch(setFavoriteArticle(slug));
      dispatch(isInactive()); // делаем активным логин
      if (!user.id) {
        throw new Error('Пользователь не залогинен');
      }
    } catch (error) {
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
