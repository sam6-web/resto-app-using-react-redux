import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getItemsFromApi,deleteItemFromApi} from '../actions/actionCreator'
import './ContainerItems.css'
import Modal from './Modal';
import { Collapse } from './Collapse';
class ContainerItems extends Component {
    constructor(props) {
        super(props)
    
        
    }
    
    componentDidMount() {
        this.props.getItemsFromApi();
    }
    
    
        
      
    render() {
        const {menu,deleteItemFromApi} = this.props
        return (
            <div className='main' >
                <div className='deuxBtn'>
                <Modal />
                <Collapse/>
                </div>
                <div className="row">
                {menu.map((el,i) => (
                    <div className={'col-sm-4'}>
                    
                        <div class="card" >
                            <img src={el.img}  class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{el.title}</h5>
                                <h6> prix: {el.prix} dinars</h6>
                                <p class="card-text"> {el.Ingrédients} </p>
                                <div className='deuxBtn'>
                                <button onClick = {()=>{console.log(deleteItemFromApi(menu[i].id))}}
                                class="btn btn-primary">
                                supprimer
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
  };

/* const mapDispatchToProps = (dispatch) => ({
    getAll: () => dispatch (getItemsFromApi()),
    deleteItem : (res) => dispatch(deleteItemFromApi(res))
}) */


export default connect(mapStateToProps, {getItemsFromApi,deleteItemFromApi})(ContainerItems)
