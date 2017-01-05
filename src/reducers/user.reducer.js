import {
    CHANGE_AGE,
    CHANGE_NAME,
} from '../constants'

const initialState = {
    name : 'kapil',
    age : 20
};

const userReducer = function(state = initialState, action){
    switch(action.type){
        case CHANGE_NAME: {
            return Object.assign({},state,{name:action.name})
        }
        case CHANGE_AGE: {
            return Object.assign({},state,{age:action.age})
        }
    }
    //if(action.type === 'CHANGE_NAME') {
    //    return {...state, name: action.name}
    //    //return Object.assign({},state,{name:action.name})
    //}
    //if(action.type === 'CHANGE_AGE') {
    //    return {...state, age: action.age}
    //    //return Object.assign({},state,{age:action.age})
    //}
    return state;
};

export default userReducer;
