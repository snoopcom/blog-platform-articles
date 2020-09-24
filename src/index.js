import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.scss';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import App from './components/app/app';
import reducers from './store/reducers';
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// const persistor = persistStore(store)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>,
    document.getElementById('root'),
  );
};

render();
