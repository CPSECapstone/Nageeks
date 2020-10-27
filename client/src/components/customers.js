import React, {Component} from 'react';

class Customers extends Component{
    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        // figure out how to use axios instead of fetch
        fetch('/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('Customers fetched..',
        customers)));
    }

    render() {
        const customersListItems = this.state.customers.map((customer) => 
            <li key={customer._id}>
                {customer.username}
            </li>
        );
        return (
            <div>
            <h2>Customers</h2>
                <ul>
                    {customersListItems}
                </ul>
            </div>
        );
    }
}

export default Customers;
