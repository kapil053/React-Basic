/**
 * Created by kapil on 29/12/16.
 */
import React from 'react'

export default class HomeCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {name: 'Mango', qty: 1, price: 20}
            ],
            input: ''
        }
    }

    addToCart() {
        let val = this.state.input;
        let split = val.split('-');
        let itemList = this.state.items;
        if (val) {
            itemList.push({
                name: split[0],
                qty: 1,
                price: split[1]
            })
        }
        this.setState({
            items: itemList,
            input: ''
        })
    }

    increment(i) {
        console.log(i)
        let state = this.state.items;
        //this.setState({
        //    items : state[i].qty + 1
        //})
        //console.log(state)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter item with price (hyphen seperated)" value={this.state.input}
                       onChange={e => this.setState({input:e.target.value})}/>
                <input type="button" value="add cart" onClick={this.addToCart.bind(this)}/>
                <Item items={this.state.items} increment={this.increment.bind(this)}/>
                <CartTotal items={this.state.items}/>
            </div>
        )
    }

}

class Item extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                    {this.props.items.map((item, i) => {
                        return <tr key={i}>
                            <td>{item.name} ***</td>
                            <td>{item.qty} ***</td>
                            <td>{item.price} ***</td>
                            <td><span>(-)***</span></td>
                            <td><span onClick={() => {this.props.increment(i)}}>(+)***</span></td>
                            <td><span>(x)</span></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

class CartTotal extends React.Component {
    render() {
        let total = this.props.items.reduce((total, row) => (total + (row.qty * row.price) ), 0);
        return (
            <div>
                your total cart value is {total}
            </div>
        )
    }
}

