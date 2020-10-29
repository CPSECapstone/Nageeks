import React, {useState, setState} from 'react';
import './App.css';
import Customers from './components/customers';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';


function App() {
  const [pageNum, setPageNum] = useState(0)

  return (
    <div className="App">
      <Banner/>
      {/* <p>{pageNum}</p> */}
      <div className="home" selectedClass={pageNum}>
        <Sidebar cb={setPageNum}/>
        <header className="App-header">
          <Customers />
          <script>
          console.log(pageNum);
          </script>
        </header>
      </div>
    </div>
  );
}

export default App;
