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

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showProduct : false
    }
  }
  
  shProduct = () =>{
    this.setState({showProduct:true})
  }
  
  render() {
    return (
      <Router>
      <div className='container'>
        
        <Navbar showProduct = {this.state.showProduct}/>
        <Route exact path="/" component ={Home} />
        <Route path="/product" component ={ContainerItems} />
        <Route path="/connx">
        <Connexion shProduct={this.shProduct}/>
        </Route>
        <Route path="/inscrit" component ={Inscription} />
      </div>
    </Router>
    )
  }
}

export default App


