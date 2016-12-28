/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class Water extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: 0,
            msg: 'No msg'
        }
    }

    update(e) {
        let msg;
        if (e.target.value <= 0) {
            msg = 'Water is in Solid state'
        } else if (e.target.value > 0 && e.target.value <= 100) {
            msg = 'Water is in Liquid state'
        } else {
            msg = 'Water is in Gas state'
        }
        this.setState({
            msg: msg
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.temperature}</div>
                <div>{this.state.msg}</div>
                <input type="text" onChange={this.update.bind(this)}/>
            </div>
        )
    }
}







