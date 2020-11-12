import React, {useState} from 'react';
import "./Sidebar.css";

export default function Sidebar (props) {
  const[sidebarNum, setSidebarNum] = useState(0)

  function openContent(e, id) {
    console.log('I was clicked');
    props.cb(id);
    setSidebarNum(id);
  }

  return (
    <div className="side-bar">
      
      <button 
        className= {sidebarNum === 0 ? "side-bar-active" : "side-bar-button"}
        onClick={(e) => openContent(e, 0)}
      >
      Apps
      </button>
      <button 
        className= {sidebarNum === 1 ? "side-bar-active" : "side-bar-button"}
        onClick={(e) => openContent(e, 1)}
      >
        My Data
      </button>
      <button 
        className= {sidebarNum === 2 ? "side-bar-active" : "side-bar-button"}
        onClick={(e) => openContent(e, 2)}
      >
        Calendar
      </button>
      <button 
        className= {sidebarNum === 3 ? "side-bar-active" : "side-bar-button"}
        onClick={(e) => openContent(e, 3)}
      >
        Forms
      </button>
      <div className="sidebar-fill"></div>
    </div>
  );
};