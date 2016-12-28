/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [
                {name: 'item1', qty: 2, price: 30},
                {name: 'item2', qty: 5, price: 10},
                {name: 'item3', qty: 7, price: 120}
            ]
        }
    }

    render() {
        return (
            <div>
                <Item items={this.state.items}/>
                <CartTotal items={this.state.items}/>
            </div>
        )
    }
}


class Item extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                {this.props.items.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    }
}

class CartTotal extends React.Component {
    render() {
        let cartTotal = this.props.items.reduce((total, row) => (total + (row.qty * row.price) ), 0)
        return (
            <div>
                your total cart value is {cartTotal}
            </div>
        )
    }
}



