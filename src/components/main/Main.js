import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import { useSelector, useDispatch } from 'react-redux';
import { isInactive, logOutAction } from '../../store/actions';

/* поля, которые отправляются на сервер */
const initialValues = {
  name: '',
  password: '',
  email: '',
};

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userReducer = useSelector((state) => state.userReducer);

  let { email } = userReducer;
  let data;

  try {
    data = JSON.parse(localStorage.getItem('user'));
    if (email === undefined) {
      email = data.email;
    }
  } catch (error) {
    if (data === null) {
      history.push('/login');
    }
  }

  const onSubmit = () => {
    dispatch(isInactive());
    dispatch(logOutAction());
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className="form">
          <h2 className="header">Привет !</h2>
          <h3 className="header">{email}</h3>
          <div className="formButtonsContainer">
            <SubmitButton size="large" className="button">
              Выход
            </SubmitButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Main;
