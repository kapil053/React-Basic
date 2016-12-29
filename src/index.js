/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router'
import App from './App'
import AppLogin from './AppLogin'
import routes from './routes'
import routesLogin from './routesLogin'

let app = document.getElementById('main')


//render(<App />, app)
//render(<Router routes={routes} history={browserHistory}></Router>, app)
render(<Router routes={routesLogin} history={browserHistory}></Router>, app)

