import React, {Component} from 'react';
import Axios from "axios";
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  dataPage: {
    backgroundColor: "#ced4de",
    backgroundColor: "#323236",
    marginTop: "20px",
    paddingBottom: "20px",
  },
  datum: {
    margin: "10px",
  },

  updateButton: {
    marginTop: "10px",
  },

  multilineColor:{
      color:'whitesmoke',
  },
})

function DataField(props) {
  const classes = useStyles();

  return (
    <div> 
      <TextField 
        className={classes.datum} 
        InputProps={{classes: {input: classes.multilineColor}}} 
        id="field"
        label={props.fieldName} 
        defaultValue={props.currentValue}
        InputLabelProps={{
          style: { color: 'whitesmoke' },
        }}
      /> 
    </div>
  )
}


function Customers () {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
    >
      <Grid item xs={3}>
        <Paper className={classes.dataPage}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="row"
          >
            <Grid item>
              <form className={classes.root} noValidate autoComplete="off">
                <DataField fieldName="First Name" currentValue="Jeff"/>
                <DataField fieldName="Last Name" currentValue="Pesos"/>
                <DataField fieldName="Date of Birth" currentValue="05/05/1963"/>
                <DataField fieldName="Phone Number" currentValue="(619) 916 7821"/>
                <DataField fieldName="Email" currentValue="jp234@gmail.com"/>
                <DataField fieldName="State" currentValue="California"/>
                <DataField fieldName="Address" currentValue="151 Beach Rd"/>
              </form>
              <Button className={classes.updateButton} variant="contained" color="primary">
                Update Data
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Customers;
