import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Form, Input, SubmitButton } from 'formik-antd';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FileAddOutlined } from '@ant-design/icons';
import Container from './Style';
import { editArticleAction } from '../../store/actions';

const EditArticle = () => {
  const { slug } = useParams();
  const articlesReducer = useSelector((state) => state.articlesReducer);
  const { articles } = articlesReducer;
  const currentArticle = articles.find((article) => article.slug === slug);
  const history = useHistory();

  // const {
  //   title, body, description,
  // } = currentArticle;

  const handleSubmit = async (values) => {
    await editArticleAction(values, slug);
    history.push('/');
  };

  return (
    <Container>
      <Formik initialValues={currentArticle} onSubmit={handleSubmit}>
        <Form>
          <h1>Редактирование Статьи</h1>
          <div>
            <label htmlFor="title">title</label>
            <Form.Item name="title">
              <Input id="title" name="title" placeholder="title" size="large" />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="description">description</label>
            <Form.Item name="description">
              <Input id="description" name="description" placeholder="description" size="large" />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="body">body</label>
            <Form.Item name="body">
              <Input.TextArea id="body" name="body" placeholder="your text" size="large" />
            </Form.Item>
          </div>
          <div>
            <SubmitButton disabled={false} size="large" icon={<FileAddOutlined />}>
              Save article
            </SubmitButton>
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default EditArticle;
