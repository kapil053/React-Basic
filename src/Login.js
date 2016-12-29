/**
 * Created by kapil on 29/12/16.
 */
import React from 'react'
import {browserHistory} from 'react-router'

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'admin',
            password: 'admin'
        }
        this.isLogin = false
    }

    checkAuth() {
        (this.isLogin) ? browserHistory.push('homepagecart') : browserHistory.push('loginfailed')
    }

    validate() {
        if (this.refs.name.value == this.state.name && this.refs.password.value == this.state.password) {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li><label>Name</label><input type="text" ref="name" onChange={this.validate.bind(this)}/></li>
                    <li><label>Password</label><input type="password" ref="password"
                                                      onChange={this.validate.bind(this)}/></li>
                    <li><label></label><input type="submit" name="submit" value="Submit"
                                              onClick={this.checkAuth.bind(this)}/></li>
                </ul>
                {this.props.children}
            </div>
        )
    }

}

