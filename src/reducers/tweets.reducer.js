import {
    ADD_TWEET,
    CHANGE_AGE,
    API_START,
    API_SUCCESS,
    API_FAIL
} from '../constants'

const initialTweets = {
    tweets: [1, 2, 3, 4],
    loading: false
};

const tweetsReducer = function(state = initialTweets, action){
    //if(action.type === 'ADD_TWEET') {
    //    return [...state, action.tweet]
    //}
    //if(action.type === 'CHANGE_AGE'){
    //    var newTweetState = [].concat(state);
    //    newTweetState.pop();
    //    return newTweetState;
    //}
    switch(action.type){
        case ADD_TWEET: {
            var newTweets = [].concat(state.tweets);
            newTweets.push(action.tweet);
            return { ...state, tweets: newTweets };
        }
        //case CHANGE_AGE: {
        //    var newTweetState = [].concat(state.tweets);
        //        newTweetState.pop();
        //        return newTweetState;
        //}
        case API_START: {
            return {...state, loading: true}
        }
        case API_SUCCESS: {
            var newTweets = [].concat(state.tweets).concat(action.tweets.map((tweet) => tweet.title));
            return {...state, loading: false, tweets: newTweets}
        }
        case API_FAIL: {
            return {...state, loading: false}
        }
    }
    return state;
}

export default tweetsReducer;
