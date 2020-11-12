import React, {Component} from 'react';
import Axios from "axios";

class Customers extends Component{
    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        // Axios Method
        Axios({
            method: 'GET',
            url: '/customers',
        }).then(res => 
            res.data,
        ).then(customers => 
            this.setState({customers}, () => console.log("Customers fetched with axios...", customers))
        )
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
