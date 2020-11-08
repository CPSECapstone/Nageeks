import React, {useState} from 'react';
import { Card, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import "./Applisting.css"

const useStyles = makeStyles({
  sidebarStyle: {
    backgroundColor: "#323236"
  },
  mainContentStyle: {
    color: "whitesmoke",
    backgroundColor: "#444449",
    fontSize: "18px",
  },
})

export default function Applistings(props) {
  return (
    <Grid 
      container
      spacing={3}
    >
      <Grid item xs={3}>
        <Card
          
        >
          hi
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          hi
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          hi
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          hi
        </Card>
      </Grid>
    </Grid>
      // <div className="applist">
      //   <div className="applisting-box">
      //     <img className="app-pic" src="https://npuh82iut7x3aosxba3ol14m-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/ucdavismedical-740x675.jpg" alt="UC Davis Medical" width="130" height="130"/>
      //     <p className="app-title-text"> UC Davis Medical Portal</p>
      //   </div>
      //   <div className="applisting-box">

      //   </div>
      //   <div className="applisting-box">

      //   </div>
      //   <div className="applisting-box">

      //   </div>
      // </div>
    );
}