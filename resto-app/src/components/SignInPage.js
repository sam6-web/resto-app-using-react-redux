import React, { Component } from 'react'

export class SignInPage extends Component {
    render() {
        return (
            <div className='signIn'>
                <form class="form-signin col-6">
                    <div class="form-label-group col-12">
                        <label for="inputEmail">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                    </div>

                    <div class="form-label-group col-12">
                        <label for="inputPassword">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block col-12" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted text-center">&copy;2020</p>
                </form>
            </div>
        )
    }
}

export default SignInPage
