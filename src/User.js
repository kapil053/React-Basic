/**
 * Created by kapil on 29/12/16.
 */
import React from 'react'

export default class User extends React.Component {

    render() {
        return (
            <div className="row">
                This is page -- {this.props.params.name}
                <div>{this.props.params.name} age is {this.props.params.age}</div>
                <div>Address is {this.props.location.query.address}</div>
            </div>
        )
    }

}
