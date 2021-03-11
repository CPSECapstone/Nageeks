import React, { useState, useEffect } from 'react';
import {Card, CardHeader, Grid, Typography} from '@material-ui/core'
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

  uiaas: {
    backgroundColor: "inherit",
  },

  card: {
    backgroundColor: "inherit",
  },

  cardheader: {
    color: "whitesmoke",
    fontSize: "20px",
  },

  textfield: {
    color: "whitesmoke",
    fontSize: "20px",
  },
}));


export default function Form() {
  const [formNum, setFormNum] = useState(0)
  const [customers, setCustomers] = useState([0]) 
  const [forms, setForms] = useState([0]) 
  const classes = useStyles();

  useEffect(() => {
      // Axios Method
      Axios({
          method: 'GET',
          url: '/applications/UCDavis/forms/userProfile',
      }).then(res => 
          res.data,
      ).then(forms => {
          console.log(forms);
          setForms(forms)
      });
  }, [formNum]);

  function displayForms() {
    return (
      forms.Components[0].Fields.map((field) => 
        <TextField color="whitesmoke" className="textfield" label={field.Title} variant="filled"/>
      )
    );
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
    >
      <Grid item xs={8} container justify="center">
          <Card
            className={classes.card}
          >
            <Grid item xs={8}>
              <Typography className={classes.cardheader}> UIaaS Demo </Typography>
            </Grid>
              <form className={classes.root}>
                                {displayForms()}
              </form>
              <Button 
                  onClick={() => { setFormNum( formNum + 1) }}
                  variant="contained" color="primary" href="">
                  Next Page
              </Button>
          </Card>
      </Grid>
    </Grid>
  );
}