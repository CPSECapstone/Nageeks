import React, {useState} from 'react';
import { Box, Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import "./Applisting.css"
import AppCard from './AppCard';

const useStyles = makeStyles({
  containerStyle: {
    justify: "center",
    align: "center",
    alignItems: "center",
  },
  cardStyle: {
  },
})

export default function Applistings(props) {
  const classes = useStyles();

  return (
    <Box style={{padding: "30px"}}>
    <Grid 
      item
      container
      className={classes.containerStyle}
      justify="space-evenly"
      spacing={6}
    >
      <Grid item xs={3}>
        <AppCard />
      </Grid>
      <Grid item xs={3}>
        <AppCard/>
      </Grid>
      <Grid item xs={3}>
        <AppCard/>
      </Grid>
      <Grid item xs={3}>
        <AppCard/>
      </Grid>
    </Grid>
    </Box>
    );
}