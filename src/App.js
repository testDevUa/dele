import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Messenger from './Components/Messenger/Messenger';
import Header from './Components/Header/Header';
import CarsContainer from './Components/Cars/CarsContainer';
import UsersContainer from './Components/Users/UsersContainer';

function App(props) {

  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Route path='/Catalog' render={() => <CarsContainer  />} />
        <Route path='/Messenger' render={() => <Messenger />} />
        <Route path='/Users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
