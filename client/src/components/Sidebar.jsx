import React, {useState} from 'react';
import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  buttonStyle: {
    height: "55px",
    textAlign: "right",
    color: "whitesmoke",
    fontSize: "18px",
  },
  activeButtonStyle: {
    height: "55px",
    textAlign: "right",
    color: "whitesmoke",
    fontSize: "18px",
    backgroundColor: "#444449",
  },
  sidebarStyle: {
    backgroundColor: "#323236"
  }
})

export default function Sidebar (props) {
  const[sidebarNum, setSidebarNum] = useState(0)
  const classes = useStyles();

  function openContent(e, id) {
    console.log('I was clicked');
    props.cb(id);
    setSidebarNum(id);
  }

  return (
    <Grid
      container
      direction="column"
      className={classes.sidebarStyle}
    >
      <Button 
         className= {sidebarNum === 0 ? classes.activeButtonStyle : classes.buttonStyle}
         onClick={(e) => openContent(e, 0)}
       >
       Apps
       </Button>
       <Button 
         onClick={(e) => openContent(e, 1)}
         className= {sidebarNum === 1 ? classes.activeButtonStyle : classes.buttonStyle}
       >
         My Data
       </Button>
       <Button 
         onClick={(e) => openContent(e, 2)}
         className= {sidebarNum === 2 ? classes.activeButtonStyle : classes.buttonStyle}
       >
         Calendar
       </Button>
      <Button 
        onClick={(e) => openContent(e, 3)}
        className= {sidebarNum === 3 ? classes.activeButtonStyle: classes.buttonStyle}
      >
        Forms
      </Button>

    </Grid>
  );
};