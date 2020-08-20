import styled from 'styled-components';

export const Container = styled.div`
  border: 3px red solid;
  height: 600px;
  display: flex;
  justify-content: center;
`;

export const Article = styled.div`
  /* display: flex;
  justify-content: center; */
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  width: 940px;
  height: 200px;
`;

export const AuthorImage = styled.img`
  width: 50px;
`;

export const Like = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  :focus {
    outline: none;
  }
`;
