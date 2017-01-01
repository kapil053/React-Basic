import React from 'react'
import ScrollTop from './ScrollTop'
require('./main-sass.scss')


export default class TextBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fontSize:"20px",
            color:"blue",
            textArea : '',
            count: 0
        }
    }
    textChange(e){
        this.setState({
            textArea : e.target.value,
            count : e.target.value.length
        })
    }
    render() {
        const inputStyle = {
            fontSize : this.state.fontSize,
            color : this.state.color
        }
        let tweetButton;
        if(this.state.count > 25){
            tweetButton = <input type="submit" disabled value="Tweet" />
        } else {
            tweetButton = <input type="submit" value="Tweet" />
        }
        return (
            <div>
                <div><label>color : </label><input type="text" onChange={(e) => {this.setState({color:e.target.value})}} /></div>
                <div><label>font size : </label><input type="text" onChange={(e) => {this.setState({fontSize:e.target.value})}}/></div>
                <p style={inputStyle}>Hello world</p>
                <div className="tweetBox">
                    <textarea onChange={this.textChange.bind(this)} name="tweetMsg" id="" cols="30" rows="10" value={this.state.textArea}></textarea>
                    <div className="action">
                        <span class="count">{this.state.count}</span>
                        {tweetButton}
                    </div>
                </div>
                <ScrollTop background="blue" name="arrow-up" />
            </div>
        )
    }
}