import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider as ReduxProvider} from "react-redux"
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Fragment>
    <ReduxProvider  store={store}>
    <App />
    </ReduxProvider>
  </Fragment>
);

