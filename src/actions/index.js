import {
    CHANGE_AGE,
    CHANGE_NAME,
    ADD_TWEET,
    API_START,
    API_SUCCESS,
    API_FAIL,
} from '../constants';

import fetch from 'isomorphic-fetch';

export function changeName(name) {
    return {
        type: CHANGE_NAME,
        name
    }
}

export function changeAge(age) {
    return {
        type: CHANGE_AGE,
        age
    }
}

export function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function callStarted() {
    return {
        type: API_START
    }
}

export function callSuccess(tweets) {
    return {
        type: API_SUCCESS,
        tweets
    }
}

export function callFail() {
    return {
        type: API_FAIL
    }
}


export function apiFunction() {
    return (dispatch) => {
        dispatch(callStarted())
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then(json => {
                console.log(json, "Tweets found");
                dispatch(callSuccess(json))
            })
            .catch((e) => {
                console.log("Error fetching tweets", e);
                dispatch(callFail())
            })
    }
}