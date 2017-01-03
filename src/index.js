/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
//import App from './App'
import TextBox from './TextBox'
//import ScrollPage from './ScrollPage'

let app = document.getElementById('main')


//render(<App />, app)
render(<TextBox />, app)
//render(<ScrollPage />, app)
