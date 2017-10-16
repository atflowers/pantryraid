import React from "react";

const navColor = {backgroundColor: '#F16E10'};
// const welcomeName = "Joseph";

// const Nav = () =>
export default class Nav extends React.Component {
  render() {
    // console.log(this.props);
    console.log("Nav props", this.props);
    return (
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
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="/landing/">Landing Page</a></li>
              <li><a href="/protected/">Protected</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Welcome, <strong>{this.props.welcomeName}</strong></a></li>
              <li><a href="/login/">Login</a></li>
              <li><a href="/signup/">Signup</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// export default Nav;
