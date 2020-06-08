import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addItemsToApi} from '../actions/actionCreator'
class Modal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title : "",
            img : "",
            ingredient : ""
        }
    }
    handleChangeTitle =(e)=>{
        this.setState({title:e.target.value})
    }
    handleChangeImg =(e)=>{
        this.setState({img:e.target.value})

    }
    handleChangeIngredient =(e)=>{
        this.setState({ingredient:e.target.value})
    }
    handleClickAdd = () =>{
        const {postItem} = this.props
            postItem (
                                {
                                    title : this.state.title,
                                    img : this.state.img,
                                    ingredient : this.state.ingredient

                                }
                            )
    }
    
    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Ajouter</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New plat</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">title:</label>
                            <input placeholder="title"onChange={this.handleChangeTitle}></input>
                        </div>
                        <div class="form-group">
                        <label for="recipient-name" class="col-form-label">image:</label>
                            <input placeholder='url Image' onChange={this.handleChangeImg}></input>
                        </div>
                        <div class="form-group">
                        <label for="recipient-name" class="col-form-label">ingredient:</label>
                            <input placeholder='description' onChange = {this.handleChangeIngredient}></input>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={this.handleClickAdd}>Ajouter</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    postItem: (res) => dispatch (addItemsToApi(res))
})
export default connect(null, mapDispatchToProps)(Modal)
