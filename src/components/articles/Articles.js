import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { Container, Wrapper, WrapperPagination } from './Style';
import { articlesAction, changePageAction } from '../../store/actions';
import Article from './ListArticles';

const Articles = () => {
  const dispatch = useDispatch();
  const articlesReducer = useSelector((state) => state.articlesReducer);
  const pageSettingsReducer = useSelector((state) => state.pageSettingsReducer);

  const loadArticles = async () => {
    await dispatch(articlesAction());
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const {
    articles, articlesCount, pageSize, params,
  } = articlesReducer;
  const { currentPage } = pageSettingsReducer;

  /* пагинация */
  const handlePage = (page) => {
    dispatch(changePageAction(page));
    dispatch(articlesAction({ ...params, offset: (page - 1) * pageSize }));
  };

  const list = articles.map((article) => <Article key={article.slug} article={article} />);

  return (
    <Container>
      <Wrapper>
        <div>{list}</div>
        <WrapperPagination>
          <Pagination
            total={articlesCount}
            defaultCurrent={1}
            showSizeChanger={false}
            onChange={handlePage}
            current={currentPage}
          />
        </WrapperPagination>
      </Wrapper>
    </Container>
  );
};

export default Articles;
