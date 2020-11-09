import React, {useState} from 'react';
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import "./Applisting.css"
import AppCard from './AppCard';

const useStyles = makeStyles({
  containerStyle: {
    padding: "10px",
  },
  cardStyle: {
  },
})

export default function Applistings(props) {
  const classes = useStyles();

  return (
    <Grid 
      container
      className={classes.containerStyle}
      justify="space-evenly"
      alignItems="flex-start"
    >
      <Grid item xs={2} >
        <AppCard />
      </Grid>
      <Grid item xs={2}>
        <AppCard/>
      </Grid>
      <Grid item xs={2}>
        <AppCard/>
      </Grid>
      <Grid item xs={2}>
        <AppCard/>
      </Grid>
    </Grid>
    );
}