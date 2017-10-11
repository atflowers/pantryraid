import React from "react";

const navColor = {backgroundColor: '#F16E10'};

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top navbar-custom" style={navColor}>
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Pantry List
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
