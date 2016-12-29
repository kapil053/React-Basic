/**
 * Created by kapil on 29/12/16.
 */
import React from 'react'

export default class Users extends React.Component {

    render() {
        return (
            <div className="row">
                This is users page
                {this.props.children}
            </div>
        )
    }

}
