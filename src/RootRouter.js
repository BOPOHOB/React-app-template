import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'mobx-react';

function RootRouter() {
  return (
    <Router>
      <Provider>
        <Switch>
          <Route path="/">
            <h1>xyu</h1>
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default RootRouter;
