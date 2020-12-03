import React, { useState, useEffect } from 'react';
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      color: 'white'
    },
  },
}));


export default function Form() {
    const [formNum, setFormNum] = useState(0)
    const [customers, setCustomers] = useState([0]) 
    const classes = useStyles();

    useEffect(() => {
        // Axios Method
        Axios({
            method: 'GET',
            url: '/customers',
        }).then(res => 
            res.data,
        ).then(customers =>     
            setCustomers(customers)
        );
    }, [formNum]);

    function displayCustomers() {
        return customers.map((customer) => 
        <div>
            <TextField id="filled-basic" label={customer.username} variant="filled"/>
        </div>   
        );
        }

        return (
            <div>
                <form className={classes.root}>
                <h2>Customers</h2>
                    <div>
                        {displayCustomers()}
                    </div>
                </form>
                <Button 
                    onClick={() => { setFormNum( formNum + 1) }}
                    variant="contained" color="primary" href="">
                    Next Page
                </Button>
            </div>
        );
    }