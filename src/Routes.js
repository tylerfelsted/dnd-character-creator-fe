import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';

function Routes({ login, register }) {
  return (
    <Switch>
      <Route exact path='/register'>
        <RegisterForm register={register} />
      </Route>
      <Route exact path='/login'>
        <LoginForm login={login} />
      </Route>
    </Switch>
  )
}

export default Routes;