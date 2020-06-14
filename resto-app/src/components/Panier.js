import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCommandeFromApi,deleteCommandFromApi} from '../actions/actionCreator'
import './ContainerItems.css'
import { IconPanier } from './IconPanier'

    class Panier extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
                               
        }
        
    }
    
    

    componentDidMount =()=> {
        this.props.getCommandeFromApi();
    }
    
    render() {
        const {panier,deleteCommandFromApi,totalQuantity,total} = this.props
        console.log('sss',this.props)
        return (
            <div className='main' >
            <span className='badge badge-danger'> {totalQuantity} </span>
            <IconPanier/>
                <div className="row">
                {panier.map((el,i) => (
                    
                    <div className={'col-sm-3'}>                    
                        <div class="card" >                            
                            <img src={el.img}  class="card-img-top" alt="..."/>                            
                            <div class="card-body">
                                <h5 class="card-title">{el.id}:  {el.title}</h5>
                                <h6> prix: {el.prix} dinars</h6>
                                <br/>
                                Quantity:1
                                <br/>
                                totale : {el.prix}
                                
                                <div >
                                <button onClick={()=>deleteCommandFromApi(panier[i].id)}
                                class="btn btn-primary">
                                    <i className='fa fa-trash'></i>
                                supprimer
                                </button>                               
                                                                                                                                                                                       
                                </div>                                
                            </div>
                        </div>
                        

                    </div> 
                     ))} 
                </div>
                {panier.map(el=>(<div> prix: {el.prix} </div>))}
                <h3>total :{total}</h3>
                <button className='btn btn-primary btn-block'>acheter</button>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { panier: state.menu,
        totalQuantity : state.menu.reduce((total,item)=>total+item.quantity,0),
        total : state.menu.reduce((total,item)=>total+item.quantity*item.prix,0)};

  };

/* const mapDispatchToProps = (dispatch) => ({
    getAll: () => dispatch (getItemsFromApi()),
    deleteItem : (res) => dispatch(deleteItemFromApi(res))
}) */


export default connect(mapStateToProps, {getCommandeFromApi,deleteCommandFromApi})(Panier)

