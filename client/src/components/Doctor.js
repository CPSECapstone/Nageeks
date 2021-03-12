import React, {useState} from 'react';
import { Box, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, ListItemSecondaryAction, ListItemText, Typography, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import "./Applisting.css"
import AppCard from './AppCard';
import PatientCard from './PatientCard';

const useStyles = makeStyles({
  containerStyle: {
    justify: "center",
    align: "center",
    alignItems: "center",
  },
  cardStyle: {
  },
  list: {
    backgroundColor: "#323236",
    borderRadius: 5
  },
})

export default function Doctor(props) {
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
          <Typography variant="h5">Patients</Typography>
          <List style={{backgroundColor: "#323236", borderRadius: 5}}>
              <ListItem button>
                  <ListItemText primary="Kyle"/>
              </ListItem>
              <Divider/>
              <ListItem button>
                  <ListItemText primary="Brendan"/>
              </ListItem>
              <Divider/>
              <ListItem button>
                  <ListItemText primary="Ethan"/>
              </ListItem>
              <Divider/>
              <ListItem button>
                  <ListItemText primary="Keegan"/>
              </ListItem>
              <Divider/>
              <ListItem button>
                  <ListItemText primary="Garret"/>
              </ListItem>
              <Divider/>
              <ListItem button>
                  <ListItemText primary="Garrett"/>
              </ListItem>
              <Divider/>
              <ListItem button>
                  <ListItemText primary="Joe"/>
              </ListItem>
          </List>
      </Grid>
      <Grid item xs={5}>
        <PatientCard name="Joe"/>
      </Grid>
    </Grid>
    <Divider style={{marginTop: 40, marginBottom: 20}}/>
    <Typography variant="h5">Todo with Joe</Typography>
    <List style={{backgroundColor: "#323236", borderRadius: 5, width: 600}}>
      <ListItem>
        <ListItemText primary="Checkup at 11:30am on 1.26.21"/>
        <ListItemSecondaryAction>
            <Checkbox
                color="primary"
                edge="end"
            />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemText primary="Arm x-ray at 9:30am on 1.29.21"/>
        <ListItemSecondaryAction>
            <Checkbox
                color="primary"
                edge="end"
            />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemText primary="Leg x-ray at 4:30pm on 2.6.21"/>
        <ListItemSecondaryAction>
            <Checkbox
                color="primary"
                edge="end"
            />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemText primary="Follow-up Appointment at 3:30pm on 2.10.21"/>
        <ListItemSecondaryAction>
            <Checkbox
                color="primary"
                edge="end"
            />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
    </Box>
    );
}