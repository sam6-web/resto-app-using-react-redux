import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import  ContainerItems  from './components/ContainerItems';
import Home from './components/Home'
import Inscription from './components/inscription';
import Connexion from './components/connexion';
import Panier from './components/Panier'
import ProductForUser from './components/ProductForUser'
import connexion from './components/connexion';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
          
    }
  }

  
  
  render() {

    return (
      
      <Router>
      <div className='container'>
        
        <Navbar/>
        <Switch>
        <Route exact path="/" component ={Home} />
        <Route path="/product" component ={ContainerItems} />
        <Route path="/panier" component ={Panier} />
        <Route path='/client'  >
        <ProductForUser/>
        </Route>
        <Route path="/connx" component={connexion} />        
        <Route path="/inscrit" component ={Inscription} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App


