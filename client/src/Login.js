import React, {useState, setState} from 'react';
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import cloud from './images/cloud2.png';
import ui from './images/ui2.png';
import lock from './images/lock2.png';
import cloudHavenCloud from './images/cloudHavenCloud.png';

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
    backgroundColor: '#2e2e2e',
    padding: '40px',
  },
  SubSlogans: {
    color: "whitesmoke",
    fontSize: "24px",
    textAlign: "center",
    backgroundColor: '#2e2e2e',
    paddingBottom: "20px",
  },
  Button: {
    width: "50%",
    alignItems: 'center',
    marginBottom: "10px",
    marginTop: "30px"
  }
})

function Login() {
  const classes = useStyles();
  const [buttonStatus, toggleButtonStatus] = useState(true);
  const [buttonText, setButtonText] = useState("Login");
  const [switchButtonText, setSwitchButtonText] = useState("New to Cloud Haven? Sign Up");


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
                <p className={classes.mainContentStyle}>{buttonText}</p>
                <p className={classes.SubHeadings} style={{marginBottom:'50px'}}>Welcome to CloudHaven</p>
                <Grid container justify="center" alignItems="center">
                  {/* <TextField color="secondary" className="textfield" label='Username' variant="filled"/> */}
                  <CssTextField
                    label="Username"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    />
                  {/* <TextField color="whitesmoke" className="textfield" label='Password' variant="filled"/> */}
                  <CssTextField
                    label="Password"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    />
                  
                  <Button variant="contained" color="primary" href="" className={classes.Button}>{buttonText}</Button> 
                  <Button onClick={() => {
                    if(buttonStatus)
                    {
                      setButtonText("Sign Up");
                      setSwitchButtonText("Already have an account? Login Here");
                      toggleButtonStatus(false);
                    }
                    else
                    {
                      setButtonText("Login");
                      setSwitchButtonText("New to Cloud Haven? Sign Up")
                      toggleButtonStatus(true);
                     }}}
                    className={classes.SubHeadings}>{switchButtonText}</Button>
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
        style={{minWidth: '100%', height: '100%', backgroundColor: '#444449', alignItems:"center", justifyContent:"center"}}>
            <img src={cloudHavenCloud} alt='chc' style={{alignItems: "center", width: "600px"}}></img>
            <Grid 
                item
                xs={4}
                style={{backgroundColor: '#444449', minWidth: '80%', maxWidth: '90%', margin: 'auto', alignItems:"center"}}>
                <p className={classes.Slogan}>CloudHaven Empowers you to control your data and makes it easy to connect with any service</p>
            </Grid>
            <Grid 
              container
              direction="row"
              style={{minWidth: '80%', maxWidth: '90%', margin: 'auto', backgroundColor: '#2e2e2e', alignItems:"center", justify:"center", paddingTop: "20px"}}>
                <Grid 
                  item
                  xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <img src={cloud} alt='cloud' style={{width: '100px'}}></img>
                  </Grid>     
                  <p className={classes.SubSlogans}>All your data in one place</p>
                </Grid>
                <Grid 
                  item
                  xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <img src={ui} alt='ui' style={{width: '100px'}}></img>
                  </Grid>
                  <p className={classes.SubSlogans}>Simple and easy to use UI</p>
                </Grid>
                <Grid 
                  item
                  xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <img src={lock} alt='lock' style={{width: '100px'}}></img>
                  </Grid>
                  <p className={classes.SubSlogans}>Keep all of your data secure</p>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;