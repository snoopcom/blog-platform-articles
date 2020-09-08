import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { Container, Wrapper, WrapperPagination } from './Style';
import { getArticles, changePageAction } from '../../store/actions';
import ListArticles from './ListArticles';

const Articles = () => {
  const dispatch = useDispatch();
  const articlesReducer = useSelector((state) => state.articlesReducer);
  const pageSettingsReducer = useSelector((state) => state.pageSettingsReducer);

  const loadArticles = async () => {
    await dispatch(getArticles());
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const { articles, articlesCount, pageSize } = articlesReducer;
  const { currentPage } = pageSettingsReducer;

  /* пагинация */
  const handlePage = (page) => {
    try {
      dispatch(changePageAction(page));
      dispatch(getArticles({ offset: (page - 1) * pageSize }));
    } catch (error) {
      // console.log('hellt');
    }
  };

  const list = articles.map((article) => <ListArticles key={article.slug} article={article} />);

  return (
    <Container>
      <Wrapper>
        <div>{list}</div>
        <WrapperPagination>
          <Pagination
            style={{ margin: '0 auto' }}
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
