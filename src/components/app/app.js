import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from '../forms/login/Login';
import SignUp from '../forms/signUp/SignUp';
import Main from '../main/Main';
import Header from '../header/header';
import Article from '../articles/Article';
import Articles from '../articles/Articles';
import CreateArticle from '../createArticle/CreateArticle';
import EditArticle from '../editArticle/EditArticle';
import { getUser } from '../../store/actions';

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
      <Route path="/articles" exact component={Articles} />
      <Route path="/add" component={CreateArticle} />
      <Route path="/articles/:slug" exact component={Article} />
      <Route path="/articles/:slug/edit" exact component={EditArticle} />
      <div>
        <Switch>
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
