import React, {Component} from 'react';

export default class AddTweet extends Component {
    addTweet(){
        var val = this.refs.tweetInput.value;
        this.props.onAdd(val);
        this.refs.tweetInput.value = '';
    }
    render(){
        return (
            <div>
                <p className="name">Kapil</p>
                <input defaultValue={''} ref={'tweetInput'} />
                <button onClick={this.addTweet.bind(this)}>Add tweet</button>
            </div>
        )
    }
}