import React, {useState, setState} from 'react';
import Applistings from './components/Applisting';
import Customers from './components/customers';
import EventCalendar from './components/eventCalendar';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Form from './components/form';
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
  sidebarStyle: {
    backgroundColor: "#323236"
  },
  mainContentStyle: {
    color: "whitesmoke",
    backgroundColor: "#444449",
    fontSize: "18px",
    justify: "center",
  },
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
})

function App() {
  const [pageNum, setPageNum] = useState(0)
  const classes = useStyles();
  
  function displayPage() {
    let page;
    if (pageNum === 0) {
      page = <Applistings/>
    } else if (pageNum === 1) {
      page =  <Grid 
                container
                justify="center"
                direction="row"
              > 
                <Grid item xs={1}>
                      <Grid
                        container
                        direction="column"
                        className={classes.sidebarStyle}
                      >
                        <Button 
                          className= {classes.activeButtonStyle}
                        >
                          Personal
                        </Button>
                        <Button 
                          className= {classes.buttonStyle}
                        >
                          Medical
                        </Button>
                        <Button 
                          className= {classes.buttonStyle}
                        >
                          Financial
                        </Button>

                      </Grid>
                </Grid>
                <Grid item xs={11}>
                  <Customers /> 
                </Grid>
              </Grid>
    } else if (pageNum === 2) {
      page = <EventCalendar />
    }else if (pageNum === 3){
      page = <Form />
    }
    return page;
  }

  return (
    <Grid 
      container
      direction="column"
    >
      <Grid 
        item 
        xs={12}
        style={{minHeight: '50px', maxHeight: '6vh'}}
      >
        <Banner/>
      </Grid>
      <Grid item xs={12}>
        <Grid 
          container
          direction="row"
          style={{ minHeight: '94vh' }}
        >
          <Grid 
            item xs={2}
            className={classes.sidebarStyle}
          >
            <Sidebar cb={setPageNum}/>
          </Grid>
          <Grid 
            item xs={10}
            className={classes.mainContentStyle}
          >
            {displayPage()}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

