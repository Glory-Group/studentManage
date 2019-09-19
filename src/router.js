import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import Login from "./views/login/login.jsx"
import Score from "./views/score/score.jsx"
import Show from "./views/show/show.jsx"
import PresidentView from "./views/presidentView/presidentView"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/score" exact component={Score} />
        <Route path="/show" exact component={Show} />
        <Route path="/presidentView" exact component={PresidentView} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
