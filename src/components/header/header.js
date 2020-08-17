import React from 'react';
import { Button } from 'antd';
import { Wrapper, Item, List } from './style';

const Header = () => (
  <Wrapper>
    <List>
      <Item>
        <Button>SignUp</Button>
      </Item>
      <Item>
        <Button>Login</Button>
      </Item>
    </List>
  </Wrapper>
);

export default Header;
