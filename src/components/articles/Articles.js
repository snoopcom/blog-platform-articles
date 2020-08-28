import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { Container, Wrapper, WrapperPagination } from './Style';
import { articlesAction } from '../../store/actions';
import Article from './Article';

const Articles = () => {
  const dispatch = useDispatch();
  const articlesReducer = useSelector((state) => state.articlesReducer);
  // const articlesCount = useSelector((state) => state.articlesCount);

  const {
    articles, articlesCount, pageSize, params,
  } = articlesReducer;
  // console.log(articlesCount);
  // console.log(articles);
  const loadArticles = async () => {
    await dispatch(articlesAction());
  };

  const handlePage = (page) => {
    dispatch(articlesAction({ ...params, offset: (page - 1) * pageSize }));
    // console.log(page);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const list = articles.map((article) => <Article key={article.slug} article={article} />);

  return (
    <Container>
      <Wrapper>
        <div>{/* listArticles */}</div>
        <div>{list}</div>
        <WrapperPagination>
          <Pagination
            total={articlesCount}
            defaultCurrent={1}
            showSizeChanger={false}
            onChange={handlePage}
          />
        </WrapperPagination>
      </Wrapper>
    </Container>
  );
};

export default Articles;
