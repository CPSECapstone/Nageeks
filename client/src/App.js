import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // React.js Hook, replacement for constructor
  // Initializes the default state
  const [apiResponse, setApiResponse] = React.useState("");

  // Function to be called
  // Fetches the data form the PI and places the response in apiResponse
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setApiResponse(res));
  };

  // In place of ComponentDidMount
  // Executes the callAPI() method after the component mounts
  useEffect(() => {
    callAPI();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Team Nageek
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="App-intro">{apiResponse}</p>
    </div>
  );
}

export default App;
