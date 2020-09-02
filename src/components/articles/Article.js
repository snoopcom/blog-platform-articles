import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Button, Popconfirm } from 'antd';
import Like from './Like';
import { deleteArticleAction } from '../../store/actions';
import { Container, ItemArticle } from './Style';

const Article = () => {
  const history = useHistory();
  const { slug } = useParams();
  const articlesReducer = useSelector((state) => state.articlesReducer);

  const userReducer = useSelector((state) => state.userReducer);
  const { username } = userReducer;

  const { articles } = articlesReducer;
  const currentArticle = articles.find((article) => article.slug === slug);
  const {
    title,
    body,
    createdAt,
    updatedAt,
    tagList,
    description,
    author,
    favoritesCount,
  } = currentArticle;

  const handleDelete = async (values) => {
    await deleteArticleAction(values);
    history.push('/');
  };

  const EditArticle = (
    <Button>
      <Link to={`/articles/${slug}/edit`}>Edit</Link>
    </Button>
  );

  const DeleteArticle = (
    <Popconfirm
      title="Вы действительно хотите удалить эту статью?"
      onConfirm={() => handleDelete(slug)}
    >
      <Button>Delete</Button>
    </Popconfirm>
  );

  const loginControl = (
    <div>
      {EditArticle}
      {' '}
      {DeleteArticle}
    </div>
  );

  return (
    <Container>
      <ItemArticle>
        <Like article={currentArticle} />
        {console.log(username)}
        {console.log(author.username)}
        {favoritesCount}
        <h2>{title}</h2>
        {username === author.username ? loginControl : null}
        Теги:
        {' '}
        {tagList}
        <br />
        <span>
          <b>description: </b>
          {description}
        </span>
        <div>
          <b>author: </b>
          {author ? author.username : null}
          <br />
          {author ? <img src={author.image} alt="" width="46" height="46" /> : null}
        </div>
        {body}
        <br />
        <b>Created at:</b>
        {' '}
        {createdAt && format(new Date(createdAt), 'hh:mm  MMMMMM dd')}
        <br />
        <b>Updated at:</b>
        {' '}
        {updatedAt && format(new Date(updatedAt), 'hh:mm  MMMMMM dd')}
      </ItemArticle>
    </Container>
  );
};

export default Article;
