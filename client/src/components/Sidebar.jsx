import React from "react";
import "./Sidebar.css";

export default function Sidebar ({}) {
  function openCity(cityName) {
    // var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(cityName).style.display = "block";
    // evt.currentTarget.className += " active";
    console.log('I was clicked');
    console.log(cityName);
  }

  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();

  return (
    <div className="side-bar">
      <div className="tab">
        <button className="tablinks" onPress={(e) => openCity(e)}>Apps</button>
        <button className="tablinks" onPress={(e) => openCity(e)}>My Data</button>
        <button className="tablinks" onPress={(e) => openCity(e)}>Calendar</button>
        {/* <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
        <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button> */}
      </div>
{/* 
      <div id="London" class="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>  */}
    </div>
  );
};