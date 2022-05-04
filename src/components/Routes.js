import '../App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Jobs from './jobs/Jobs';

const Routes = () => (
  <div>
    <Router>
      <Switch>

        <Route exact path="/" component={Jobs} />

      </Switch>
    </Router>
  </div>
);

export default Routes;
