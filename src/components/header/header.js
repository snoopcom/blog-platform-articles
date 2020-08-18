import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import {
  Wrapper, Item, List, ListNavbar,
} from './style';
import { isInactive, logOutAction } from '../../store/actions';
import logoUser from '../../img/logoUser.png';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);

  let { email } = userReducer;
  let data;

  /* проверка на авторизацию */
  let isLogged = !userReducer.email;

  try {
    data = JSON.parse(localStorage.getItem('user'));
    if (email === undefined) {
      email = data.email;
      isLogged = false;
    }
  } catch (error) {
    if (data === null) {
      // history.push('/login');
    }
  }

  const handleSignUp = () => {
    dispatch(isInactive());
  };

  const handleLogin = () => {
    dispatch(isInactive());
  };

  const handleExit = () => {
    dispatch(isInactive());
    dispatch(logOutAction());
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/articles');
  };

  /* login/signUp */
  const navbar = (
    <List>
      <Item>
        <Link to="/signUp" onClick={handleSignUp}>
          SignUp
        </Link>
      </Item>
      <Item>
        <Link to="/login" onClick={handleLogin}>
          Login
        </Link>
      </Item>
    </List>
  );

  /* профиль пользователя */
  const userProfile = (
    <List>
      <Item>
        <Button>Create Article</Button>
      </Item>
      <Item>{email}</Item>
      <Item>
        <img src={logoUser} alt="logo user" />
      </Item>
      <Item>
        <Button onClick={handleExit}>Log Out</Button>
      </Item>
    </List>
  );

  return (
    <Wrapper>
      <ListNavbar>{isLogged ? navbar : userProfile}</ListNavbar>
    </Wrapper>
  );
};

export default Header;
