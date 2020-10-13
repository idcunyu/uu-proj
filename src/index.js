import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import Index from '@pages/index/index';
import Fund from '@pages/fund/index';

ReactDOM.render(
  (
    <BrowserRouter>
      <Route path="//" component={Index}/>
      <Route path="/fund" component={Fund} />
    </BrowserRouter>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
