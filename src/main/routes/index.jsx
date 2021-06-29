import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'modules/Home';
import ProjectGuidelines from 'modules/Project Guidelines';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProjectGuidelines} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
