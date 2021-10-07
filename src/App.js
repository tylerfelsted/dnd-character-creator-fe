// import './App.css';
import Routes from './Routes'

import BackendAPI from './api/backendAPI';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './hooks/userContext';
import jwt from 'jsonwebtoken';
import Navigation from './Navigation';

const CURRENT_USER_KEY = 'character-creator-user-token'

function App() {
  const [ token, setToken ] = useLocalStorage(CURRENT_USER_KEY);
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    async function getUser() {
      if(token){
        console.log(token);
        BackendAPI.setToken(token);
        const { _id, username } = jwt.decode(token)
        setCurrentUser({ _id, username });
      } else {
        BackendAPI.clearToken();
        setCurrentUser(null);
      }
    }
    getUser();
  }, [token])

  async function login(e, data) {
    e.preventDefault();
    try {
      setToken(await BackendAPI.login(data));
    } catch(err) {
      console.error(err);
    }
  }

  async function register(e, data) {
    e.preventDefault();
    try {
      setToken(await BackendAPI.register(data));
    } catch(err) {
      console.error(err);
    }
  }

  function logout() {
    BackendAPI.token = null;
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <Navigation logout={logout} />
          <Routes login={login} register={register} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;