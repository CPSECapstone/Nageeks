import React, {useState, setState} from 'react';
import Applistings from './components/Applisting';
import Customers from './components/customers';
import EventCalendar from './components/eventCalendar';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Form from './components/form';
import Login from './Login';
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
})

function App() {
  const [pageNum, setPageNum] = useState(0)
  const classes = useStyles();
  
  function displayPage() {
    let page;
    if (pageNum === 0) {
      page = <Applistings/>
    } else if (pageNum === 1) {
      page = <Customers />
    } else if (pageNum === 2) {
      page = <EventCalendar />
    }else if (pageNum === 3){
      page = <Login/>
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

