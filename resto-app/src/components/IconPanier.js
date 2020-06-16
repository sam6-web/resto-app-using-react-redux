import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import './iconpanier.css'
export class IconPanier extends Component {
    constructor(props) {
        super(props)

    }
   
    
    render(props) {
            return (
                <div>

                    <div className='icon'>                           
                        <Link to='/panier'>                    
                        <i className='fa fa-shopping-cart'></i>
                        </Link>
                    </div>
                </div>
            
        ) 
    }
}


const mapStateToProps = (state) => { 
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(IconPanier)

