/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class StateLifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        },
        this.add = this.add.bind(this)
    }

    add() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        let userList = ["kapil", "Mayur", "Modi"];

        //Create a simple component called HelloWorld. This component only renders "Hello World" on the screen
        let hello = "Hello world";

        return (
            <div>
                <button onClick={this.add}>click</button>
                <State myNumber = {this.state.count} />
            </div>
        )
    }
}

class State extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('Component should update!')
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}







