import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Login from '../forms/login/Login';
import SignUp from '../forms/signUp/SignUp';
import Header from '../header/header';
import Article from '../articles/Article';
import Articles from '../articles/Articles';
import { getUser } from '../../store/actions';
import FormArticle from '../hoc/FormArticle';

const App = () => {
  const dispatch = useDispatch();
  const logAccount = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      await dispatch(getUser());
    }
  };

  useEffect(() => {
    logAccount();
  }, []);

  return (
    <HashRouter>
      <Route path="/" component={Header} />
      <Route path="/" exact component={Articles} />
      <Route path="/articles/:slug" exact component={Article} />
      <Route path="/add" component={FormArticle} />
      <Route path="/signUp" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      <Route path="/articles/:slug/edit" exact component={FormArticle} />
    </HashRouter>
  );
};

export default App;
