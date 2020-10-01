import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
// import createBrowserHistory from 'history/createBrowserHistory';
import * as History from 'history';
import TodoApp from './containers/TodoApp';
import createStore from './store/index';
import Error from './components/Error';
import { Route } from 'react-router';

// historyの作成
const history = History.createBrowserHistory();
// Storeの作成
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path={"/"} component={TodoApp} />
        <Route exact path={"/error"} component={Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);