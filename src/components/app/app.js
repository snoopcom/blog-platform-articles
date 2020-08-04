import React from 'react';
import './app.scss';
import { HashRouter } from 'react-router-dom';
import Header from '../header/header';

const App = () => (
  <HashRouter>
    <div className="App">
      <Header />
    </div>
  </HashRouter>
);

export default App;
