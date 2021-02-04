import React, {useState, setState} from 'react';
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import cloud from './images/cloud.png';
import ui from './images/ui.png';
import lock from './images/lock.png';

const useStyles = makeStyles({
  mainContentStyle: {
    color: "whitesmoke",
    fontSize: "40px",
    textAlign: "center",
  },
  SubHeadings: {
    color: "whitesmoke",
    fontSize: "14px",
    textAlign: "center",
  },
  Slogan: {
    color: "whitesmoke",
    fontSize: "24px",
    textAlign: "center",
    backgroundColor: '#2e2e2e'
  },
  Button: {
    width: "50%",
    alignItems: 'center'
  }
})

function Login() {
  const classes = useStyles();

  return (
    <Grid 
      container
      direction="row"
      style={{height: '100%'}}>
      <Grid 
        item 
        xs={4}
        style={{height: '100%', backgroundColor: '#2e2e2e'}}>
        <Grid 
        container
        direction="column"
        style={{minWidth: '100%', height: '100%', backgroundColor: '#2e2e2e', alignItems:"center", justify:"center"}}>
            <Grid 
                item
                xs={6}
                style={{backgroundColor: '#444449', minWidth: '90%', minHeight: '90%', margin: 'auto', alignItems:"center"}}>
                <p className={classes.mainContentStyle}>Login</p>
                <p className={classes.SubHeadings} style={{marginBottom:'50px'}}>Welcome to CloudHaven</p>
                <Grid container justify="center" alignItems="center">
                  <TextField color="whitesmoke" className="textfield" label='username' variant="filled"/>
                  <TextField color="whitesmoke" className="textfield" label='password' variant="filled"/>
                  <Button variant="contained" color="primary" href="" className={classes.Button}>Login</Button> 
                </Grid>
                <p className={classes.SubHeadings}>About Us</p>
            </Grid>
        </Grid>

      </Grid>
      <Grid 
        item 
        xs={8}
        style={{width: '100%', margins: 'auto', alignItems:"center", justify:"center"}}
      >
         <Grid 
        container
        direction="row"
        style={{minWidth: '100%', height: '100%', backgroundColor: '#444449', alignItems:"center", justify:"center"}}>
            <Grid 
                item
                xs={4}
                style={{backgroundColor: '#444449', minWidth: '80%', maxWidth: '90%', margin: 'auto', alignItems:"center"}}>
                <p className={classes.Slogan}>CloudHaven Empowers you to control your data and makes it easy to connect with any service</p>
            </Grid>
            <Grid 
              container
              direction="row"
              style={{minWidth: '80%', maxWidth: '90%', margin: 'auto', backgroundColor: '#2e2e2e', alignItems:"center", justify:"center"}}>
                <Grid 
                  item
                  xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <img src={cloud} alt='cloud' style={{width: '100px'}}></img>
                  </Grid>     
                  <p className={classes.Slogan}>All your data in one place</p>
                </Grid>
                <Grid 
                  item
                  xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <img src={ui} alt='ui' style={{width: '100px'}}></img>
                  </Grid>
                  <p className={classes.Slogan}>Simple and easy to use UI</p>
                </Grid>
                <Grid 
                  item
                  xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <img src={lock} alt='lock' style={{width: '100px'}}></img>
                  </Grid>
                  <p className={classes.Slogan}>Keep all of your data secure</p>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;