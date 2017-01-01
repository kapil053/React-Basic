/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
//import Water from './Water'
//import WaterRandom from './Water-random'
//import UserDetail from './UserDetail'
//import Cart from './Cart'
//import StopWatch from './StopWatch'
//import Form from './Form'
//import App from './App'
//import StateLifeCycle from './StateLifeCycle'
//import Header from './Header-login'
//import UserList from './User-list'
//import BasicPage from './BasicPage'
import UserList1 from './User-list-1'

let app = document.getElementById('main')

//UserDetail
const user = [
    {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
    {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
    {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
    {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg'},
    {name: 'Ben', age: 30, avatar: 'https://randomuser.me/api/portraits/men/2.jpg'}
]

//render(<App />, app)
//render(<Water />, app)
//render(<WaterRandom />, app)
//render(<UserDetail list={user} />, app)
//render(<Cart />, app)
//render(<StopWatch />, app)
//render(<Form />, app)
//render(<StateLifeCycle />, app)
//render(<Header />, app)
//render(<UserList />, app)
//render(<BasicPage />, app)
render(<UserList1 />, app)