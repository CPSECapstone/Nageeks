import React, {useState} from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  cardClass: {
    backgroundColor: "#323236",
    color: "whitesmoke",
    width: 525,
    // maxHeight: "320px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function AppCard(props) {
  const classes = useStyles();
  return (
    <Card
      className={classes.cardClass}
      elevation={10}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" color="secondary">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        // subheader=""
      />
      <CardMedia
        //className={classes.media}
        style={{height: 0, paddingTop: '56%'}}
        // image={require('./ucdavis.jpg')}
        // image= <img src={require("../images/joe.png")}/>
        image={require("../images/joe.png")}
        title="Patient Picture"
      />
      <CardContent>
        <Typography variant="body2" color="whitesmoke" component="p">
            {"Joe is 24 years old with no pre-existing conditions. Joe recently broke his arm and his leg."}
        </Typography>
      </CardContent>
    </Card>
  )
}