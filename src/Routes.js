import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';
import AllCharacters from './characters/AllCharacters';
import CharacterDetails from './characters/CharacterDetails';
import Home from './Home';

function Routes({ login, register }) {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/register'>
        <RegisterForm register={register} />
      </Route>
      <Route exact path='/login'>
        <LoginForm login={login} />
      </Route>
      <Route exact path='/characters'>
        <AllCharacters />
      </Route>
      <Route exact path='/characters/:characterId'>
        <CharacterDetails />
      </Route>
    </Switch>
  )
}

export default Routes;