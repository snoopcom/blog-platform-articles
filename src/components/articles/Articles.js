import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Style';
import { getArticles } from '../../store/actions';
import Article from './Article';

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesReduser);
  // const { } = articles;

  const loadArticles = async () => {
    await dispatch(getArticles());
  };

  useEffect(() => {
    loadArticles({ limit: 10 });
  }, []);
  // const userReducer = useSelector((state) => state.userReducer);

  /* проверка на авторизацию
  const isLogged = !!userReducer.email;
  console.log(isLogged); */

  /* извлекаем статьи
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
            createdAt,
            favoritesCount,
            favorited,
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
              <Like onClick={() => handleLike(slug, favorited)}>
                {favorited ? <HeartFilled /> : <HeartOutlined />}
              </Like>
              <br />
              {favoritesCount}
            </Article>

          ),
        )
        : null}
    </div>
  );
  */

  const list = articles.map((article) => <Article key={article.slug} article={article} />);

  return (
    <Container>
      <div>{/* listArticles */}</div>
      <div>{list}</div>
    </Container>
  );
};

export default Articles;
