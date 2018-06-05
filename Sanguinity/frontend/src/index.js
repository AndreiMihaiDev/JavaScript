import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import cookie from 'react-cookies'

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AUTHENTICATED } from './actions';

import requireAuth from './Components/hoc/require_auth';
import noRequireAuth from './Components/hoc/no_require_auth';

import Navbar from './Components/universal/navbar';
import Table from './Components/Table/table';
import Logs from './Components/Logs/logs'
import Signin from './Components/auth/signin';
import Settings from './Components/Settings/settings'
import Sms from './Components/Sms/sms'
import Stiva from './Components/Stiva/stiva'

import Signout from './Components/auth/signout';

import reducers from './reducers';
import HomePage from './Components/universal/homePage';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = cookie.load('user')

if(user) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={noRequireAuth(Signin)} />                       
        <Route path="/table" component={requireAuth(Table)} />
        <Route path="/logs" component={requireAuth(Logs)} />
        <Route path="/settings" component={requireAuth(Settings)} />
        <Route path="/sms" component={requireAuth(Sms)} />        
        <Route path="/stiva" component={requireAuth(Stiva)} />        
        <Route path="/signout" component={requireAuth(Signout)} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);