import React from 'react'
require('./main-sass.scss')


export default class TextBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fontSize:"20px",
            color:"blue"
        }
    }
    render() {
        const inputStyle = {
            fontSize : this.state.fontSize,
            color : this.state.color
        }
        return (
            <div>
                <div><label>color : </label><input type="text" onChange={(e) => {this.setState({color:e.target.value})}} /></div>
                <div><label>font size : </label><input type="text" onChange={(e) => {this.setState({fontSize:e.target.value})}}/></div>
                <p style={inputStyle}>Hello world</p>
                <h2 className="myClass">Kapil Chotwani</h2>
            </div>
        )
    }
}