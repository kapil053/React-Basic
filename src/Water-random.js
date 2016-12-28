/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class WaterRandom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: 0,
            msg: 'No msg'
        }
    }

    update() {
        let random = Math.random() * (110 - 10) + 10;
        let msg;
        if (random <= 0) {
            msg = 'one'
        } else if (random > 0 && random < 100) {
            msg = 'two'
        } else {
            msg = 'three'
        }
        this.setState({
            temperature: random,
            msg: msg
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.temperature}</div>
                <div>{this.state.msg}</div>
                <button onClick={this.update.bind(this)}>click</button>
            </div>
        )
    }
}







