import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from "./views/login/login"
import Score from "./views/score/score"
import Show from "./views/show/show"
import PresidentView from "./views/presidentView/presidentView"
import Index from "./views/index"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/score" exact component={Score} />
        <Route path="/show" exact component={Show} />
        <Route path="/presidentView" exact component={PresidentView} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
