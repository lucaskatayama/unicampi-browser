import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';


// Redux
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from 'reducers';


import config from './config';

const middlewares = [
  thunk,
  promise()
];

if (config.env === `development`) {
  middlewares.push(reduxLogger());
}

const store = createStore(reducers, applyMiddleware(...middlewares));



ReactDOM.render(<App store={store}/> , document.getElementById('app'))
