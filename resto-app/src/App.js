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
        {/* <SignInPage/> */}
        <Navbar/>
        <Route exact path="/" component ={Home} />
        <Route path="/product" component ={ContainerItems} />

      </div>
    </Router>
   
  );
}

export default App;
