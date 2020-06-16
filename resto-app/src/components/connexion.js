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
    handleClickConx=()=>{
         const x = this.props.users.filter(el => (el.email === this.state.emailConx)&&(el.password===this.state.passwordConx) )
         x.map(el => el.email === this.state.emailConx && el.password=== this.state.passwordConx  ? this.props.history.push('/client'):alert("inscrvez-vous"))

                 
    }
    componentDidMount= ()=>{
        this.props.getusers()
        }
   
    render() {
        const{showPlat}=this.props
        return (
            <div className='signIn'>
                <form onSubmit={this.handleClickConx} class="form-signin col-4">
                    <div class="form-label-group col-12">
                        <label for="inputEmail">Email address</label>
                        <input
                        onChange={this.handleChangeEmailConx}
                        name="emailConx"
                        type="email"
                        value={this.state.emailConx}
                        id="inputEmail" class="form-control"
                        placeholder="Email address"
                        required autofocus/>
                    </div>
                    <div class="form-label-group col-12">
                        <label for="inputPassword">Password</label>
                        {this.props.menu.map(el=>( <div> {el.email} </div> ))}

                        <input
                        type="password"
                        name="passwordConx"
                        onChange={this.handleChangePasswordConx}
                        value={this.state.passwordConx}
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password"
                        required/>
                    </div>
                    <button onClick={showPlat} class="btn bt btn-lg btn-primary btn-block col-12" type="submit">connexion</button>
                    <p class="mt-5 mb-3 text-muted text-center">&copy;2020</p>

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menu:state.menu,
     users:state.users,
});
const mapDispatchToProps = (dispatch)=>({
    getusers: () => dispatch(getUserFromApi())
})

export default connect(mapStateToProps,mapDispatchToProps)(Connexion)
