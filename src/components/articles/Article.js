import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Button, Popconfirm } from 'antd';
import Like from './Like';
import { deleteArticleAction } from '../../store/actions';
import {
  Container,
  ItemArticle,
  ArticleContainer,
  AuthorImage,
  Title,
  LikeContainer,
  UsetContainer,
  Header,
  DataUser,
  Author,
  Description,
  Tag,
  TagContainer,
  BodyContainer,
  DateContainer,
} from './Style';

const Article = () => {
  const history = useHistory();
  const { slug } = useParams();
  const articlesReducer = useSelector((state) => state.articlesReducer);
  const dataUserReducer = useSelector((state) => state.dataUserReducer);

  const { username } = dataUserReducer;

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
    <Button type="primary">
      <Link to={`/articles/${slug}/edit`}>Edit</Link>
    </Button>
  );

  const DeleteArticle = (
    <Popconfirm
      title="Вы действительно хотите удалить эту статью?"
      onConfirm={() => handleDelete(slug)}
    >
      <Button type="danger">Delete</Button>
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
        <Header>
          <ArticleContainer>
            <Title>{title}</Title>
            <LikeContainer>
              <Like article={currentArticle} />
              {favoritesCount}
            </LikeContainer>
          </ArticleContainer>
          <UsetContainer>
            <DataUser>
              <Author>{author.username}</Author>
              {username === author.username ? loginControl : null}
            </DataUser>
            {author ? <AuthorImage src={author.image} alt="" width="46" height="46" /> : null}
          </UsetContainer>
        </Header>
        <Description>{description}</Description>
        <TagContainer>
          {tagList.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
        <BodyContainer>{body}</BodyContainer>
        <DateContainer>
          <b>Created at: </b>
          {' '}
          {createdAt && format(new Date(createdAt), 'hh:mm  MMMMMM dd')}
          <br />
          <b>Updated at: </b>
          {' '}
          {updatedAt && format(new Date(updatedAt), 'hh:mm  MMMMMM dd')}
        </DateContainer>
      </ItemArticle>
    </Container>
  );
};

export default Article;
