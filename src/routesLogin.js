/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import AppLogin from './AppLogin'
import Login from './Login'
import HomeCart from './HomeCart'
import LoginFailed from './LoginFailed'

export default (
    <Route path="/" component={AppLogin}>
        <IndexRoute component={Login} />
        <Route path="homepagecart" component={HomeCart} />
        <Route path="loginfailed" component={LoginFailed} />
    </Route>
)







