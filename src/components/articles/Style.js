import styled from 'styled-components';

export const Container = styled.div`
  border: 3px red solid;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  margin: 0 auto;
`;

export const AllListArticles = styled.div`
  margin-bottom: 40px;
  background-color: #fff;
  border-radius: 5px;
  width: 940px;
  height: 200px;
  /* border: 3px red solid; */
  box-shadow:
   0 1px 4px rgba(0, 0, 0, .3),
   -23px 0 40px -23px rgba(0, 0, 0, .8),
   23px 0 40px -23px rgba(0, 0, 0, .8),
   0 0 40px rgba(0, 0, 0, .1) inset;
}
`;

export const Header = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
`;

export const ArticleContainer = styled.div`
  display: flex;
  width: 360px;
  /* border: 3px blue solid;  */
  padding-top: 10px;
  padding-left: 20px;
`;

export const DataUser = styled.div`
  /* border: 1px blue solid; */
  width: 160px;
  text-align: center;
  padding-top: 15px;
`;

export const DateCreate = styled.span`
  font-weight: bolder;
  font-family: 'Lato', sans-serif;
`;

export const Title = styled.h3`
  color: #007acc;
  font-size: 20px;
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const LikeContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  width: 31px;
  /* border: 1px red solid; */
  padding-top: 2px;
  font-size: 18px;
`;

export const UsetContainer = styled.div`
  display: flex;
  width: 270px;
  padding-top: 10px;
  padding-right: 25px;
  /* border: 3px blue solid; */
`;

export const Author = styled.h4`
  font-size: 15px;
  font-family: 'Lobster', cursive;
  font-weight: bolder;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const WrapperPagination = styled.div`
  width: 450px;
  display: flex;
  margin: 0 auto;
`;
