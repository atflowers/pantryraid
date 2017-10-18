import React from "react";

import apple from "../../images/apple.png"

const navColor = {backgroundColor: '#F16E10'};

// const Nav = () =>
export default class Nav extends React.Component {

  logOut = () => {
    console.log("Logging out...");
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    localStorage.removeItem('userName');
  };

  render() {
    const userID = localStorage.getItem('userID');
    const userName = localStorage.getItem('userName');
    // console.log("Nav userID",userID);
    // console.log("Nav props", typeof this.props.welcomeName);
    // console.log("Nav localStorage:",localStorage);
    // console.log("Nav this.props.userID",this.props.userID);

    if (userID !== null) {
      return (
        <nav className="navbar navbar-inverse navbar-top navbar-custom" id="TOP" style={navColor}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="collapsed navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" /> <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <img className="logoImg" alt="logo" src={apple}/>
              <a href="/" className="navbar-brand">
                Pantry Raid
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href={"/user/" + userID} >Welcome, <strong>{userName}</strong></a></li>
                <li><a href="/" onClick={this.logOut}>Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-inverse navbar-top navbar-custom" style={navColor}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="collapsed navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" /> <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <img className="logoImg" alt="logo" src={apple}/>
              <a href="/" className="navbar-brand">
                Pantry Raid
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="rightNavBar"><a href="/login/">Login</a></li>
                <li><a href="/signup/">Signup</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
}

// export default Nav;
