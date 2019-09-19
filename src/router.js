import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from "./routes/main/home/home.jsx"
import Login from "./routes/main/login/login.jsx"
import Score from "./routes/visual/score/score.jsx"
import Show from "./routes/visual/show/show.jsx"
import PresidentView from "./routes/president/presidentView/presidentView"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/main/home" exact component={Home} />
        <Route path="/main/login" exact component={Login} />
        <Route path="/visual/score" exact component={Score} />
        <Route path="/visual/show" exact component={Show} />
        <Route path="/president/presidentView" exact component={PresidentView} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
