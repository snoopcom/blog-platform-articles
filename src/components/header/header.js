import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  Wrapper, Item, List, ListNavbar, ListHome, LogoUser,
} from './style';
import { isInactive, logOutAction, articlesAction } from '../../store/actions';
import logoUser from '../../img/logoUser.png';

const Header = () => {
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
      console.log(error);
    }
  }

  const handleSignUp = () => {
    dispatch(isInactive());
  };

  const handleLogin = () => {
    dispatch(isInactive());
  };

  const handleExit = () => {
    dispatch(logOutAction());
    dispatch(articlesAction());
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

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
        <Link to="/add">Create Article</Link>
      </Item>
      <Item>{email}</Item>
      <Item>
        <LogoUser src={logoUser} alt="logo user" />
      </Item>
      <Item>
        <Link to="" onClick={handleExit}>
          Log Out
        </Link>
      </Item>
    </List>
  );

  return (
    <Wrapper>
      <ListHome>
        <NavLink to="/">Realworld Blog</NavLink>
      </ListHome>
      <ListNavbar>{isLogged ? navbar : userProfile}</ListNavbar>
    </Wrapper>
  );
};

export default Header;
