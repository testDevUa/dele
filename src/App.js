import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CarsContainer from './Components/Cars/CarsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import AboutContainer from './Components/About/AboutContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import MessengerContainer from './Components/Messenger/MessengerContainer';
import Login from './Components/Login/Login';

function App(props) {

  return (
    <div className="App">
      <HeaderContainer />
      <div className='body'>
        <Route path='/Catalog' render={() => <CarsContainer  />} />
        <Route path='/Messenger' render={() => <MessengerContainer />} />
        <Route path='/Users' render={() => <UsersContainer />} />
        <Route path='/About' render={() => <AboutContainer /> } />
        <Route path='/Profile/:userId?' render={() => <ProfileContainer /> } />
        <Route path='/Login' render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
