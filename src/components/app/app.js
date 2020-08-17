import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import Main from '../main/Main';
import Header from '../header/header';
import { getUser } from '../../store/actions';
import './app.scss';

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
      <div className="App">
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
