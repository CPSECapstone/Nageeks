import React, {useState, setState} from 'react';
import './App.css';
import Customers from './components/customers';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';


function App() {
  const [pageNum, setPageNum] = useState(0)
  
  function displayPage() {
    let page;
    if (pageNum ==0) {
      page = <p>Welcome to Old Navy</p>
    } else {
      page = <Customers />
    }
    return page;
  }

  return (
    <div className="App">
      <Banner/>
      <div className="home" pageNum={pageNum}>
        <Sidebar cb={setPageNum}/>
        <header className="App-header">
          {displayPage()}
        </header>
      </div>
    </div>
  );
}

export default App;
