import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Tiles background="blue" name="home" />
                <Tiles background="pink" name="glass" />
                <Tiles background="orange" name="search" />
                <Tiles background="yellow" name="copy" />
            </div>
        )
    }

}

class Tiles extends React.Component {
  render() {
      const styleWrapper = {
          background: this.props.background,
          height: "100px",
          width: "100px",
          lineHeight: "100px",
          textAlign:"center",
          display:"inline-block",
          marginRight: "10px"
      }
      const fontStyle = {
          fontSize:"40px",
          color:"#fff",
          fontWeight:"bold"
      }
    return (
      <span style={styleWrapper}>
        <FontAwesome style={fontStyle} name={this.props.name} />
      </span>
    )
  }

}

