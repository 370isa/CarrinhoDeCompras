import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import reducers from './redux/reducers'
import FrontPage from './pages/FrontPage';

const Store = createStore(reducers);

ReactDOM.render(
  <BrowserRouter history={ HashRouter }>
    <Provider store={ Store }>
      <Route path="/" component={ FrontPage } />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
