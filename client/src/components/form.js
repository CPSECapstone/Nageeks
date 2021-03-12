import React, { useState, useEffect } from 'react';
import {Card, CardHeader, Grid, Typography} from '@material-ui/core'
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiFormLabel-root': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
       borderColor: 'white',
     },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
    },
    },
  },
})(TextField);

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
          url: '/applications/UCDavis/forms/b',
      }).then(res => 
          res.data,
      ).then(forms =>     
          setForms(forms)
      );
  }, [formNum]);

  function displayForms() {
    return (
      Object.getOwnPropertyNames(forms).map((fieldName) => 
        <TextField color="whitesmoke" className="textfield" label={fieldName} variant="filled"/>
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
              <CssTextField
                    label="0"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    />
              <CssTextField
                    label="length"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    />
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