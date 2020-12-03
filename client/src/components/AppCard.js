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
    // maxHeight: "320px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function AppCard() {
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
        title="App Name"
        // subheader=""
      />
      <CardMedia
        className={classes.media}
        // image={require('./ucdavis.jpg')}
        image={require('./missing.png')}
        title="App Logo"
      />
      <CardContent>
        <Typography variant="body2" color="whitesmoke" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests.
        </Typography>
      </CardContent>
    </Card>
  )
}