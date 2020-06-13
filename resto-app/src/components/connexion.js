import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUserFromApi} from '../actions/actionCreator'

export class Connexion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            emailConx :"",
            passwordConx :""
        }
        console.log(this.props)
    }
    handleChangeEmailConx=(e)=>{
        this.setState({
            emailConx:e.target.value
        })
        console.log(this.state.emailConx)
        
    }
    handleChangePasswordConx =(e)=>{
        this.setState({
            passwordConx:e.target.value
        })
        console.log(this.state.passwordConx)
    }
    handleClick = () =>{
        this.props.history.push('/product')
    }
    componentDidMount =()=> {
        
        console.log('ess',this.props.getUserFromApi())
    }
    render() {
        const {auth,shProduct} = this.props
        return (
            <div className='signIn'>
            <form onSubmit={this.handleClick} class="form-signin col-4">
                <div class="form-label-group col-12">
                    <label for="inputEmail">Email address</label>
                    <input
                    onChange={this.handleChangeEmailConx}
                    value={this.state.emailConx}                    
                    name="email"
                    type="email" 
                    id="inputEmail" class="form-control"
                    placeholder="Email address"
                    required autofocus/>
                </div>
                <div class="form-label-group col-12">
                    <label for="inputPassword">Password</label>
                    <input
                    onChange={this.handleChangePasswordConx}
                    value={this.state.passwordConx}
                    type="password"
                    name="password"                
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required/>
                </div>
                <button onClick={shProduct}  class="btn bt btn-lg btn-primary btn-block col-12" type="submit">connexion</button>
                <p class="mt-5 mb-3 text-muted text-center">&copy;2020</p>
            </form>

        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { auth: state.auth};
};



export default connect(mapStateToProps,{getUserFromApi})(Connexion)
