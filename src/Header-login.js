/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isUserLoggedIn : false
        }
    }

    login(){
        this.setState({
            isUserLoggedIn : true
        })
    }

    render(){
        const display = this.state.isUserLoggedIn ? <p>Kapil</p> : <button onClick={this.login.bind(this)}>Login</button>
        return (
            <div>{display}</div>
        )
    }
}









