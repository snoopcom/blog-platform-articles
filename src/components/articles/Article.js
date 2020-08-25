import React from 'react';
// import { formatDistance } from 'date-fns';
// import { useDispatch } from 'react-redux';
import { ListArticles /* , AuthorImage */ } from './Style';
// import Like from './Like';

const Article = (/* { article } */) => (
  // const dispatch = useDispatch();
  // const {
  //   slug,
  //   title,
  //   tagList,
  //   author,
  //   description,
  //   createdAt,
  //   favoritesCount,
  //   favorited,
  // } = article;

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

  <ListArticles>
    {/* <h3>{title}</h3>
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
      <Like article={article} />
      <br />
      {favoritesCount} */}
  </ListArticles>
);

export default Article;
