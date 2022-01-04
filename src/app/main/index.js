import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Login from '../login';
import UserContext from '../user/user.context';
import { AuthenticatedRoute } from '../common/routing';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <AuthenticatedRoute path="/" component={Dashboard} />
    </Switch>
  );
};

export default Main;
