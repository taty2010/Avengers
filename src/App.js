import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
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
          <Link className='navlink'to='/'> Home </Link>
          <Link className='navlink' to='/avengerList'> Avengers </Link>
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route path='/avengerList' component={AvengerList} />
    </div>
  );
}

export default App;
