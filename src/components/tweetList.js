import React, {Component} from 'react';

export const TweetList = ({tweets}) => {
    return (
        <ul>
            {tweets.map((tweet,index) => <li key={index}>{tweet}</li>)}
        </ul>
    )
}

export default TweetList;
