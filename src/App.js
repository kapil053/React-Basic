import React from 'react';
import {connect} from 'react-redux'

import {
    changeName,
    changeAge,
    addTweet,
    apiFunction
} from './actions';

import {TweetList} from './components/tweetList'
import {AddTweet} from './components/addTweet'

class App extends React.Component {
  constructor() {
    super()
  }
  //onChangeName(){
  //    this.props.dispatch(changeName('Manoj'))
  //}
  //onChangeAge(){
  //    this.props.dispatch(changeAge(40))
  //}
  //onAddTweet(tweet){
  //  this.props.dispatch(addTweet(tweet))
  //}

  render() {
    return (
      <div>
        <p>Name - {this.props.user.name} <button onClick={this.props.onChangeName}>Change Name</button></p>
        <p>Age - {this.props.user.age} <button onClick={this.props.onChangeAge}>Change Age</button></p>
        <TweetList tweets={this.props.tweets.tweets} />
        <AddTweet onAdd={this.props.addTweetUsingProps} />
        <button onClick={this.props.getTweets}>fetch more tweets</button>
      </div>
    )
  }

}

var AppComponent = connect((state) => {
  return state;
},(dispatch) => { // either ways to call function
  return {
    onChangeName(){
      dispatch(changeName('Manoj'))
    },
    onChangeAge(){
      dispatch(changeAge(40))
    },
    addTweetUsingProps(tweet) {
      dispatch(addTweet(tweet))
    },
    getTweets() {
      dispatch(apiFunction());
    }
  }
})(App)

export default AppComponent;



