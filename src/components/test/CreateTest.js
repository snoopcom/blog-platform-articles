import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Input, Table, SubmitButton, AddRowButton, RemoveRowButton,
} from 'formik-antd';
import { FileAddOutlined, TagOutlined, DeleteOutlined } from '@ant-design/icons';
import { addArticleAction, isActive } from '../../store/actions';
import validationSchema from './ValidationSchema';
import {
  Container,
  InputContainer,
  ButtonContainer,
  RequiredStar,
  SubmitButtonContainer,
  Title,
} from './Style';

const initialValues = {
  title: '',
  description: '',
  body: '',
  tagList: [],
};

const CreateArticle = () => {
  const buttonReducer = useSelector((state) => state.buttonReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const articleSubmit = async (values) => {
    dispatch(isActive());
    await addArticleAction(values);
    history.push('/');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={articleSubmit}
      validationSchema={validationSchema}
    >
      <Container>
        <Form>
          <Title>
            <h1>Создать новую статью</h1>
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
                        name={`tagList[${i}]`}
                        placeholder="tag"
                        size="large"
                        suffix={<TagOutlined />}
                        autoFocus
                      />
                      <div>
                        <RemoveRowButton name="tagList" icon={<DeleteOutlined />} index={i} />
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

export default CreateArticle;
