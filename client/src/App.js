import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <header><Banner/></header>
      <Sidebar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Test 
        </a>
        <Customers />
      </header>
    </div>
  );
}

export default App;
