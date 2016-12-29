/**
 * Created by kapil on 29/12/16.
 */
import React from 'react'
import {browserHistory} from 'react-router'

export default class LoginFailed extends React.Component {
    backToLogin(){
        browserHistory.push('/')
    }

    render() {
        return (
            <div>
                <button onClick={this.backToLogin.bind(this)}>Back</button>
                Login failed
            </div>
        )
    }

}

