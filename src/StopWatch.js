/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class StopWatch extends React.Component {
    constructor() {
        super()
        this.state = {
            startStop: false,
            startStopText: 'Start',
            timer: 0,
        }
        this.timerId = 0;
    }

    startStopText() {
        let msg;
        if (this.state.startStop) {
            msg = 'Start';
            this.stopTimer()
        } else {
            msg = 'Stop';
            this.startTimer()
        }
        this.setState({
            startStop: this.state.startStop ? false : true,
            startStopText: msg,
        })
    }

    startTimer() {
        this.timerId = setInterval(() => {
            this.setState({
                timer: this.state.timer + 1
            })
        }, 1000)
    }

    stopTimer() {
        clearInterval(this.timerId)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div>
                <div>{this.state.timer}</div>
                <button onClick={this.startStopText.bind(this)}>{this.state.startStopText}</button>
            </div>
        )
    }
}





