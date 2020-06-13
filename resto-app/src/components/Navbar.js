import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Navbar extends Component {
    render() {
        const {showProduct}=this.props

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">                
                
                <a className="navbar-brand" href="#">Chez tati yosra</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link " to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        {showProduct?<Link className="nav-link" to="/product">product</Link>:
                                                <Link >ss</Link>
                                            }
                    </li>                                     
                    </ul>
                    
                        <Link className="nav-link bg-dark" to="/inscrit">inscription</Link>
                        <Link className="nav-link  bg-dark" to="/connx">connexion</Link>

                    
                </div>
            </nav>
        )
    }
}

export default Navbar
