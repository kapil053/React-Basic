/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Users from './Users'
import User from './User'
import Error from './Error'

let isLoggedIn = true;

function checkAuth(nextState, replace){
    if(!isLoggedIn){
        replace({
            path : '/'
        })
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="users" component={Users}>
            <Route path=":name" component={User} onEnter={checkAuth}>
                <Route path=":age" component={User} />
            </Route>
        </Route>
        <Route path='*' component={Error} />
    </Route>
)







