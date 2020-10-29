import React, {useState, setState} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';


function App() {
  const [pageNum, setPageNum] = useState(0)

  return (
    <div className="App">
      <Banner/>
      <p>{pageNum}</p>
      <div className="home">
        <Sidebar cb={setPageNum}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Test 
          </a>
          <script>
          if (pageNum === 0) {
            <Customers />
          }
          console.log(pageNum);
          </script>
        </header>
      </div>
    </div>
  );
}

export default App;
