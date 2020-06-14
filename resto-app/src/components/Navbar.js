import React, { Component } from 'react'
import IconPanier from './IconPanier'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Navbar extends Component {
    render() {
        

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">                
                
                <a className="navbar-brand" href="#">Chez</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link " to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">product</Link>                                            
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/client">achter</Link>                                            
                    </li>
                                                      
                    </ul>
                        <Link className="nav-link" to="/inscrit">inscription</Link>
                        <Link className="nav-link" to="/connx">connexion</Link>
                        <IconPanier />   


                    
                </div>
            </nav>
        )
    }
}

export default Navbar
