import React, {useState} from 'react';
import data from './avengers'
import './App.css';
import {Route, Link} from 'react-router-dom'
import Home from './Components/Home'
import AvengerList from './Components/AvengerList';
import Heroes from './Components/Heroes';

function App() {
  const [hero, sethero] = useState(data)
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
      <Route exact path='/avengerList' render={()=>{
        return <AvengerList items={hero}/>
      }} />
      <Route path='/avengerList/:id' render={(routeProps)=>{
        return <Heroes {...routeProps} items={hero} />
      }}/>
    </div>
  );
}

export default App;
