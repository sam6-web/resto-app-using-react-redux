import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getItemsFromApi,postCommandToApi} from '../actions/actionCreator'

export class ProductForUser extends Component {





    componentDidMount =()=> {
        this.props.getItemsFromApi();
    }
    render() {
        const {menu,postCommandToApi} = this.props
        return (
            <div>
                <div className="row">
                {menu.map((el,i) => (
                    
                    <div className={'col-sm-4'}>                    
                        <div class="card" >                            
                            <img src={el.img}  class="card-img-top" alt="..."/>     
                            <div class="card-body">
                                <h5 class="card-title"> {el.title}</h5>
                                <h6> prix: {el.prix} dinars</h6>
                                <p class="card-text"> {el.Ingrédients} </p>
                                <div >
                                <button onClick ={()=>postCommandToApi(menu[i])} 
                                class="btn btn-primary">
                                Commander
                                </button>                                                                                                                                                                                                                                              
                                </div>                                
                            </div>
                        </div>
                         
                    </div> 
                     ))} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { menu: state.menu};
}



export default connect(mapStateToProps, {getItemsFromApi,postCommandToApi})(ProductForUser)
