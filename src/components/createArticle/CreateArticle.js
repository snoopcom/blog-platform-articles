import React from 'react';
import { Formik } from 'formik';
import {
  Form, Input, Table, SubmitButton, AddRowButton, RemoveRowButton,
} from 'formik-antd';
import { FileAddOutlined, TagOutlined, DeleteOutlined } from '@ant-design/icons';
import Container from './Style';

const initialValues = {
  title: '',
  description: '',
  body: '',
  tagList: [],
};

const CreateArticle = () => {
  // const handleClickButton = () => {
  console.log('test');
  // };

  // const a = 1;

  return (
    <Formik initialValues={initialValues}>
      <Container>
        <Form>
          <h1>Создать новую статью</h1>
          <div>
            <label htmlFor="title">
              title
              <span> *</span>
            </label>
            <Form.Item name="title">
              <Input id="title" name="title" placeholder="title" size="large" />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="description">
              description
              <span> *</span>
            </label>
            <Form.Item name="description">
              <Input id="description" name="description" placeholder="description" size="large" />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="body">
              body
              <span> *</span>
            </label>
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
                        // onPressEnter={handleClickButton}
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
              loading={false}
              disabled={false}
              size="large"
              shape="round"
              block="true"
              icon={<FileAddOutlined />}
            >
              Send
            </SubmitButton>
          </div>
        </Form>
      </Container>
    </Formik>
  );
};

export default CreateArticle;
