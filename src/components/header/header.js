import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  Wrapper, Item, List, ListNavbar, ListHome, LogoUser,
} from './style';
import { isInactive, logOutAction, getArticles } from '../../store/actions';
import logoUser from '../../img/logoUser.png';

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.dataUserReducer);
  const { loggedIn } = userData;

  const handleSignUp = () => {
    dispatch(isInactive());
  };

  const handleLogin = () => {
    dispatch(isInactive());
  };

  const handleExit = () => {
    dispatch(logOutAction());
    dispatch(getArticles());
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const handleCreateArticle = () => {
    dispatch(isInactive());
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
        <Link to="/add" onClick={handleCreateArticle}>
          Create Article
        </Link>
      </Item>
      <Item>{userData.username}</Item>
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
      <ListNavbar>{loggedIn ? userProfile : navbar}</ListNavbar>
    </Wrapper>
  );
};

export default Header;
