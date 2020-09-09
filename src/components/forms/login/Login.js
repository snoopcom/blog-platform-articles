import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { openNotificationError, openNotificationWarning } from '../../../api/openNotification';
import {
  authorization, logAction, isActive, isInactive, userData,
} from '../../../store/actions';
import validationSchema from './ValidationSchema';
import '../Style.scss';

/* поля, которые отправляются на сервер */
const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const isAtiveButton = useSelector((state) => state.buttonReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      dispatch(isActive());
      const response = await dispatch(authorization(values));

      if (response.request.status === 200) {
        dispatch(userData(response.data.user));
        dispatch(logAction(values));
      }

      const { token } = response.data.user;
      localStorage.setItem('token', `${token}`);
      history.push('/');
    } catch (error) {
      if (error.request.status === 422) {
        dispatch(isInactive());
        openNotificationWarning('warning');
      }
      if (error.request.status === 0) {
        dispatch(isInactive());
        openNotificationError('error');
      }
    }
  };

  return (
    <div className="Container">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        className="Container"
      >
        <Form className="form">
          <h2>Вход</h2>
          <div>
            <label htmlFor="email">
              Почта
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="email">
              <Input
                id="email"
                name="email"
                placeholder="my@mail.ru"
                size="large"
                suffix={<MailOutlined />}
              />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="password">
              Пароль
              <span className="required-star"> *</span>
            </label>
            <Form.Item name="password">
              <Input.Password
                id="password"
                name="password"
                placeholder="My-password-123"
                size="large"
              />
            </Form.Item>
          </div>
          <div className="formButtonsContainer">
            <SubmitButton
              disabled={isAtiveButton}
              htmlType="submit"
              size="large"
              className="button"
            >
              Войти
            </SubmitButton>
          </div>
          <div className="linkContainer">
            <Link to="/signUp">Регистрация</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
