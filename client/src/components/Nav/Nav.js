import React from "react";

const navColor = {backgroundColor: '#F16E10'};

const Nav = () =>
<div className="navStyle">
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
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/landing/">Landing Page</a></li>
          <li><a href="/protected/">Protected</a></li>
          <li><a href="/login/">Login</a></li>
          <li><a href="/signup/">Signup</a></li>
        </ul>
      </div>
    </div>
  </nav>
  </div>;

export default Nav;
