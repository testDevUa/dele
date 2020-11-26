import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Messenger from './Components/Messenger/Messenger';
import CarsContainer from './Components/Cars/CarsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import AboutContainer from './Components/About/AboutContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

function App(props) {

  return (
    <div className="App">
      <HeaderContainer />
      <div className='body'>
        <Route path='/Catalog' render={() => <CarsContainer  />} />
        <Route path='/Messenger' render={() => <Messenger />} />
        <Route path='/Users' render={() => <UsersContainer />} />
        <Route path='/About' render={() => <AboutContainer /> } />
        <Route path='/Profile/:userId?' render={() => <ProfileContainer /> } />
      </div>
    </div>
  );
}

export default App;
