import React, { Component } from "react";

class ShoppingListForm extends Component {
    constructor(props){
        super(props);
        this.state = { name: "", qty: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this. handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem(this.state);
        this.setState({ name: "", qty: ""});
    }




    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"> Name: </label>
                <input  id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                <br/>
                <label htmlFor="qty"> Quantity: </label>
                <input  id="qty"
                        name="qty"
                        value={this.state.qty}
                        onChange={this.handleChange} />
                <div>
                    <button>
                        Add Item.
                    </button>
                </div>
            </form>

        )
    }
}

export default ShoppingListForm;