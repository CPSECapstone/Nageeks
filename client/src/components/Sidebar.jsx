import React, {useState, setState} from 'react';
import "./Sidebar.css";

export default function Sidebar (props) {

  function openContent(e, id) {
    console.log('I was clicked');
    props.cb(id);
  }

  return (
    <section className="side-bar">
      <button className="tablinks" onClick={(e) => openContent(e, 0)}>Apps</button>
      <button className="tablinks" onClick={(e) => openContent(e, 1)}>My Data</button>
      <button className="tablinks" onClick={(e) => openContent(e, 2)}>Calendar</button>
    </section>
  );
};