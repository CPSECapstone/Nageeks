import React, {useState, setState} from 'react';
import './App.css';
import Applistings from './components/Applisting';
import Customers from './components/customers';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
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
  },
})

function App() {
  const [pageNum, setPageNum] = useState(0)
  const classes = useStyles();
  
  function displayPage() {
    let page;
    if (pageNum == 0) {
      page = <Applistings/>
    } else {
      page = <Customers />
    }
    return page;
  }

  return (
    <div className="App">
      <Grid 
        container
        direction="column"
      >
        <Grid 
          item 
          xs={12}
          style={{minHeight: '6vh', maxHeight: '6vh'}}
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
              {/* <Paper
              > */}
                {displayPage()}
              {/* </Paper> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
