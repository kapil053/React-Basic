/* eslint-disable no-console */
import React from 'react'
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import App from './App'

import createStore from './store';
const store = createStore();

let app = document.getElementById('main')


render(
    <Provider store={store}>
        <App />
    </Provider>
    ,app)


//import {createStore, combineReducers, applyMiddleware} from 'redux';

//const initialState = {
//    name : 'kapil',
//    age : 20
//};

//const userReducer = function(state = initialState, action){
//    if(action.type === 'CHANGE_NAME') {
//        return {...state, name: action.name}
//        //return Object.assign({},state,{name:action.name})
//    }
//    if(action.type === 'CHANGE_AGE') {
//        return {...state, age: action.age}
//        //return Object.assign({},state,{age:action.age})
//    }
//    return state;
//};

//const initialTweets = [1,2,3,4];
//
//const tweetsReducer = function(state = initialTweets, action){
//    if(action.type === 'ADD_TWEET') {
//        return [...state, action.tweet]
//    }
//    if(action.type === 'CHANGE_AGE'){
//        var newTweetState = [].concat(state);
//        newTweetState.pop();
//        return newTweetState;
//    }
//    return state;
//}

//const logger = (store) => (next) => (action) => {
//    console.log(action.type, "ACTION");
//    return next(action)
//}

//const middleWare = applyMiddleware(logger, errorHandler)

//const store = createStore(combineReducers({
//    user : userReducer,
//    tweets : tweetsReducer
//}),middleWare)

//store.subscribe(() => {
//    console.log('store has changed', store.getState())
//})

//store.dispatch({type: 'CHANGE_NAME', name:'Manoj'});
//store.dispatch({type: 'CHANGE_AGE', age:30});
//store.dispatch({type: 'ADD_TWEET', tweet:6});

//function fetchUsers(params){
//    return {
//        type : 'CHANGE_NAME',
//        params
//    }
//}







