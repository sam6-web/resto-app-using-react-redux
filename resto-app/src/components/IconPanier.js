import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import './iconpanier.css'
export class IconPanier extends Component {
    constructor(props) {
        super(props)

    }
   
    
    render(props) {
        const {totalQuantity} = this.props 
            return (
            <div className='icon'>
                <Link to='/panier'>
                <i className='fa fa-shopping-cart'></i>
                </Link>              
            </div>
        ) 
    }
}


const mapStateToProps = (state) => { 
    return{
       
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(IconPanier)

