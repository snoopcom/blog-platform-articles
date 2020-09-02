import styled from 'styled-components';

export const Container = styled.div`
  border: 3px red solid;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  margin: 0 auto;
`;

export const ArticleContainer = styled.div`
  display: flex;
  width: 250px;
  /* border: 3px red solid; */
  padding-top: 15px;
  padding-left: 20px;
`;

export const Title = styled.h3`
  color: #0f3cbb;
`;

export const ItemArticle = styled.div`
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

export const LikeContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  width: 25px;
  /* border: 1px red solid; */
  padding-top: 2px;
`;

export const AllListArticles = styled.div`
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
