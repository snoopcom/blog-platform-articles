import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Wrapper, Item, List } from './style';
import { isInactive } from '../../store/actions';

const Header = () => {
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(isInactive());
  };

  const handleLogin = () => {
    dispatch(isInactive());
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Header;
