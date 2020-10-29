import React, {useState} from 'react';
import "./Applisting.css"

export default function Applistings(props) {
  return (
      <div className="applist">
        <div className="applisting-box">
          <img className="app-pic" src="https://npuh82iut7x3aosxba3ol14m-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/ucdavismedical-740x675.jpg" alt="UC Davis Medical" width="130" height="130"/>
        <p className="app-title-text"> UC Davis Medical Portal</p>
        </div>
        <div className="applisting-box"></div>
        <div className="applisting-box"></div>
        <div className="applisting-box"></div>
      </div>
    );
}