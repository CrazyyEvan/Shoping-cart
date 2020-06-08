import React, { Component } from "react"
import './ItemStylesheet.css'

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 0, text: "shadow the hedgehog is a bitch ass motherfucker", amount: 0},
                {id: 1, text: "THERE ARE NO CHILD LABOUR LAWS IN SPACE!", amount: 0},
                {id: 2, text: "SOMEBODY ONCE TOLD YOU THE WORLD IS GONNA SQUARE YOU", amount: 0},
                {id: 3, text: "CSS sucks sometimes", amount: 0},
                {id: 4, text: "PREPARE YOUR BREAD OR PERISH", amount: 0}
            ]

        }
    }

    render() {
        return(
            <ul>
                {this.state.items.map((item, i) => {
                    return (
                        <li id={item.id}>
                            <p>{item.text}</p>
                            <a id="remove" href="#" onClick={() => {
                                let list_item = document.getElementById(item.id);
                                list_item.remove()
                            }}>Remove</a>
                            <br/>
                            <div id="buttons">
                                <a href="#" id="plus" onClick={() => {
                                    this.setState({item: item.amount += 1})
                                }}>+</a>
                                <a href="#" id="minus" onClick={() => {
                                    this.setState({item: item.amount -= 1})
                                }}>-</a>
                                <p>{item.amount}</p>
                                <br/>
                                <a href="#" id="reset" onClick={() => {
                                    this.setState({item: item.amount = 0})
                                }}>RESET</a>
                            </div>

                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Items
