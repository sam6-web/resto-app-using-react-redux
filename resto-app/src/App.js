import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import  ContainerItems  from './components/ContainerItems';
import Home from './components/Home'
import SignInPage from './components/SignInPage';

function App() {
  return (
    <Router>
      <div className='container'>
        
        <Navbar/>
        <Route exact path="/" component ={Home} />
        <Route path="/product" component ={ContainerItems} />
        <Route path="/signup" component ={SignInPage} />
      </div>
    </Router>
   
  );
}

export default App;
