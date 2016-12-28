/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count : 0
    }
  }
  add(){
    this.setState({
      count : this.state.count + 1
    })
  }
  render() {
    let userList = ["kapil","Mayur","Modi"];

    //Create a simple component called HelloWorld. This component only renders "Hello World" on the screen
    let hello = "Hello world";

    return (
      <div>
        <h2>{hello} {this.props.company}</h2>
        <span>{this.state.count}</span>
        <button onClick={this.add.bind(this)}>click</button>
        <ul>
          {userList.map((user,i) => {
            return <li key={i}>{user}</li>
          })}
        </ul>
      </div>
    )
  }
}

//Create a class Student having two fields name and roll number and a method to print the student detail.
//Create two objects of the class and use display method to print the user detail. perform the above tast using ES6

class Student {
    constructor(name,rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }

    get display(){
        return this.printDetails()
    }

    printDetails() {
        return `Hi my name is  ${this.name}  and roll number is  ${this.rollNumber}`
    }
}

let Kapil = new Student("kapil",1);
let Mayur = new Student("Mayur",2);

console.log(Kapil.display)
console.log(Mayur.display)

App.defaultProps = {
    company : "To The New"
}


App.propTypes = {
    company : React.PropTypes.string.isRequired
}






