import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FileAddOutlined, TagOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  Form, Input, Table, SubmitButton, AddRowButton, RemoveRowButton,
} from 'formik-antd';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  InputContainer,
  ButtonContainer,
  RequiredStar,
  SubmitButtonContainer,
  Title,
} from './Style';
import validationSchema from './ValidationSchema';
import { editArticleAction, isActive, addArticleAction } from '../../store/actions';
import FormComponent from './FormComponent';

const initialValues = {
  title: '',
  description: '',
  body: '',
  tagList: [],
};

const FormArticle = ({ currentArticle }) => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const isAtiveButton = useSelector((state) => state.buttonReducer);

  const history = useHistory();

  const handleSubmit = async (values) => {
    dispatch(isActive());

    if (currentArticle) {
      await editArticleAction(values, slug);
    }
    if (!currentArticle) {
      await addArticleAction(values);
    }

    history.push('/');
  };

  const TitleForm = currentArticle ? 'Редактировать статью' : 'Cоздать статью';

  return (
    <Formik
      initialValues={currentArticle || initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <div>
        <Form>
          <div>
            <h1>
              <Title>{TitleForm}</Title>
            </h1>
          </div>
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
                    <div key={slug}>
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
              disabled={isAtiveButton}
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
      </div>
    </Formik>
  );
};

FormArticle.propTypes = {
  currentArticle: PropTypes.instanceOf(Object).isRequired,
};

const CreateForm = FormComponent(FormArticle);

export default CreateForm;
