import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Wrapper, Item, List } from './style';
import { isInactive } from '../../store/actions';

const Header = () => {
  const buttonReducer = useSelector((state) => state.buttonReducer);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(isInactive);
    console.log();
  };
  const handleLogin = () => {
    dispatch(isInactive);
    console.log();
  };

  return (
    <Wrapper>
      <List disabled={buttonReducer}>
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
