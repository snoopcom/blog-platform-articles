import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { FileAddOutlined, TagOutlined, DeleteOutlined } from '@ant-design/icons';
// import _ from 'lodash';
import {
  Form, Input, Table, SubmitButton, AddRowButton, RemoveRowButton,
} from 'formik-antd';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  Container,
  InputContainer,
  ButtonContainer,
  RequiredStar,
  SubmitButtonContainer,
  Title,
} from '../createArticle/Style';
import validationSchema from './ValidationSchema';
import { editArticleAction, isActive } from '../../store/actions';

const EditArticle = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const buttonReducer = useSelector((state) => state.buttonReducer);
  const articlesReducer = useSelector((state) => state.articlesReducer);
  const { articles } = articlesReducer;
  const currentArticle = articles.find((article) => article.slug === slug);
  const history = useHistory();

  const handleSubmit = async (values) => {
    dispatch(isActive());
    await editArticleAction(values, slug);
    history.push('/');
  };

  return (
    <Formik
      initialValues={currentArticle}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Container>
        <Form>
          <Title>
            <h1>Редактирование статьи</h1>
          </Title>
          <InputContainer>
            <label htmlFor="title">
              title
              <RequiredStar> *</RequiredStar>
            </label>
            <Form.Item name="title">
              <Input id="title" name="title" placeholder="title" size="large" />
            </Form.Item>
          </InputContainer>
          <InputContainer>
            <label htmlFor="description">
              description
              <RequiredStar> *</RequiredStar>
            </label>
            <Form.Item name="description">
              <Input id="description" name="description" placeholder="description" size="large" />
            </Form.Item>
          </InputContainer>
          <InputContainer>
            <label htmlFor="body">
              body
              <RequiredStar> *</RequiredStar>
            </label>
            <Form.Item name="body">
              <Input.TextArea id="body" name="body" placeholder="your text" size="large" />
            </Form.Item>
          </InputContainer>
          <InputContainer>
            <Table
              key={slug}
              name="tagList"
              rowKey={(row) => `${row.id}`}
              size="small"
              pagination={false}
              columns={[
                {
                  title: 'Tags',
                  key: 'tag',
                  render: (text, record, i) => (
                    <div>
                      <Input
                        key={slug}
                        name={`tagList[${i}]`}
                        placeholder="tag"
                        size="large"
                        suffix={<TagOutlined />}
                        autoFocus
                      />
                      <div>
                        {i === 0 ? null : (
                          <RemoveRowButton name="tagList" icon={<DeleteOutlined />} index={i} />
                        )}
                      </div>
                    </div>
                  ),
                },
              ]}
            />
            <ButtonContainer>
              <AddRowButton
                name="tagList"
                createNewRow={() => ''}
                size="large"
                type="primary"
                block="true"
                id="addTagButton"
              >
                Add tag
              </AddRowButton>
            </ButtonContainer>
          </InputContainer>
          <SubmitButtonContainer>
            <br />
            <SubmitButton
              disabled={buttonReducer}
              htmlType="submit"
              loading={false}
              size="large"
              block="true"
              icon={<FileAddOutlined />}
            >
              Send
            </SubmitButton>
          </SubmitButtonContainer>
        </Form>
      </Container>
    </Formik>
  );
};

export default EditArticle;
