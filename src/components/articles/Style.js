import styled from 'styled-components';

export const Container = styled.div`
  border: 3px red solid;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  margin: 0 auto;
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

// export const Like = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   :focus {
//     outline: none;
//   }
// `;

export const ListArticles = styled.div`
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  width: 940px;
  height: 200px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const WrapperPagination = styled.div`
  width: 450px;
  margin: 0 auto;
  border: 3px blue solid;
`;
