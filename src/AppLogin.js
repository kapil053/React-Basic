/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import {Link} from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class AppLogin extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}

