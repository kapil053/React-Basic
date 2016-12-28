/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class UserDetail extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                {this.props.list.map((list, index) => {
                    return <tr key={index}>
                        <td>{list.name}</td>
                        <td>{list.age}</td>
                        <td><img src={list.avatar} alt=""/></td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    }
}

UserDetail.defaultProps = {
    list: [
        {name: 'Kapil', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
        {name: 'Mayur', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
        {name: 'Manoj', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
        {name: 'Prince', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg'},
        {name: 'Yatin', age: 30, avatar: 'https://randomuser.me/api/portraits/men/2.jpg'}
    ]
}

UserDetail.propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string,
        age: React.PropTypes.number,
        avatar: React.PropTypes.string
    }))
}
