import React from 'react';

import '../styles/TopMenu.css';

const TopMenu = ({ avatar }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 top-menu-item logo-wrapper">
          <img src={require("../assets/logo.png")} alt="logo" className="logo" />
          <span className="logo-name" > Instagtam </span>
        </div>
        <div className="col-sm-4 top-menu-item search-bar">
          {/* <input className="form-control" placeholder="Search" /> */}
        </div>
        <div className="col-sm-4 top-menu-item">
          {/* ICONS */}
        </div>
      </div>
    </div>    
  )
}

export default TopMenu;
