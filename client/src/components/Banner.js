import React from "react";
import './Banner.css';
import MenuListComposition from './MenuListComposition';

export default function Banner() {
  return (
    <div className="banner">
      <div>
        <a href="" className="banner-text">☁ CloudHaven</a>
      </div>
      <div className="menu-div">
        <MenuListComposition className="banner-account"/>
      </div>
      {/* <a href= "" className="banner-account"> Welcome, Johnny</a> */}
        
    </div>
  );
};
