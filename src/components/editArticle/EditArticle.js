import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { FileAddOutlined, TagOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  Form, Input, Table, SubmitButton, AddRowButton, RemoveRowButton,
} from 'formik-antd';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Container from './Style';
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
            <div>
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
            </div>
          </div>
          <div>
            <SubmitButton
              disabled={buttonReducer}
              htmlType="submit"
              loading={false}
              size="large"
              block="true"
              icon={<FileAddOutlined />}
            >
              Save article
            </SubmitButton>
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default EditArticle;
