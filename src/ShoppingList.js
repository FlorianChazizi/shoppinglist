import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import './App.css';
class ShoppingList extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                    { name: "Milk", qty: "2 gallons"},
                    { name: "Bread", qty: "2 Loaves"}
            ]
        };
        this.addItem = this.addItem.bind(this);
    }
    
    renderItems() {
        return ( 
            <ul>
                {this.state.items.map(item => (
                    <li className="order">
                        {item.name} : {item.qty}
                    </li>
                ))}
            </ul>
        );
    }

    addItem(item){
        this.setState(state => ({
            items: [...state.items, item]
        }))
    }


    render() {
        return(
            <div>
                <h1>Shopping List </h1>
                <span className="sp">Todo list approach. v1. </span>
                {this.renderItems()}
                <ShoppingListForm addItem={this.addItem} />
            </div>
        )
    }

}

export default ShoppingList;
