import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home'
import AvengerList from './Components/AvengerList'

function App() {
  return (
    <div className="App">
      <nav>
        <div className='headerName'>
        <h1>Avengers</h1>
        </div>
        <div className='nav'>
          <h3>Home</h3>
          <h3>Avenger List</h3>
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route path='/avengerList' component={AvengerList} />
    </div>
  );
}

export default App;
