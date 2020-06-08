import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getItemsFromApi} from '../actions/actionCreator'
import './ContainerItems.css'
import Modal from './Modal';
class ContainerItems extends Component {
    componentDidMount() {
        this.props.getAll();
      }
    render() {
        const {reducer} = this.props
        return (
            <div className='main' >
                <Modal />
                <div className="row">
                {reducer.map((el) => (
                    <div className={'col-sm-4'}>
                    
                        <div class="card" >
                            <img src={el.img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{el.title}</h5>
                                <p class="card-text"> {el.Ingrédients} </p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
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
    return { reducer: state.reducer };
  };

const mapDispatchToProps = (dispatch) => ({
    getAll: () => dispatch (getItemsFromApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerItems)
