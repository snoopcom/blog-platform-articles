import styled from 'styled-components';

export const Container = styled.div`
  border: 3px red solid;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  margin: 0 auto;
  /* width: 80%;
  max-width: 550px;
  margin: 3em auto;
  padding: 1em; */
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
  width: 225px;
  /* border: 3px blue solid;  */
  padding-top: 10px;
  padding-left: 20px;
`;

export const DataUser = styled.div`
  /* border: 1px blue solid; */
  width: 160px;
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const LikeContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  width: 25px;
  /* border: 1px red solid; */
  padding-top: 2px;
`;

export const UsetContainer = styled.div`
  display: flex;
  width: 250px;
  /* border: 3px blue solid; */
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const WrapperPagination = styled.div`
  width: 450px;
  margin: 0 auto;
  border: 3px blue solid;
`;
