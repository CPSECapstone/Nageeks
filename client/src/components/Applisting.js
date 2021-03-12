import React, {useState} from 'react';
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import "./Applisting.css"
import AppCard from './AppCard';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  containerStyle: {
    justify: "center",
    align: "center",
    alignItems: "center",
  },
  cardStyle: {
  },

  headerStyle: {
    paddingTop: "10px",
    color: "whitesmoke",
    fontSize: "40px",
  },

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

export default function Applistings(props) {
  const classes = useStyles();

  return (
    // <Box style={{padding: "30px"}}>
    // <Grid 
    //   item
    //   container
    //   className={classes.containerStyle}
    //   justify="space-evenly"
    //   spacing={6}
    // >
    //   {/* <Grid item xs={3}>
    //     <AppCard />
    //   </Grid>
    //   <Grid item xs={3}>
    //     <AppCard/>
    //   </Grid>
    //   <Grid item xs={3}>
    //     <AppCard/>
    //   </Grid>
    //   <Grid item xs={3}>
    //     <AppCard/>
    //   </Grid> */}
    // </Grid>
    // </Box>


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
              <Typography className={classes.headerStyle} variant="h1" component="h1"> 
                UC Davis Homepage
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.dataPage}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid item>
              <form className={classes.root} noValidate autoComplete="off">
                <DataField fieldName="First Name" currentValue="Jeff"/>
                <DataField fieldName="Last Name" currentValue="Pesos"/>
                <DataField fieldName="Email" currentValue="jp234@gmail.com"/>
              </form>
            </Grid>
            <Grid item>
              <Button className={classes.updateButton} variant="contained" color="primary">
                Schedule Appointment
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>

    );
}