import React from "react";

const navColor = {backgroundColor: '#F16E10'};
// const welcomeName = "Joseph";

// const Nav = () =>
export default class Nav extends React.Component {
  state = {isLoggedOut: false};

  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log("Nav TOKEN:",token);
    if (token == null) {
      console.log("The token is NULL");
      this.setState({ isLoggedOut: true })
    }
  }

  logOut = () => {
    console.log("Logging out...");
    localStorage.removeItem('token');
  };

  render() {
    const {isLoggedOut} = this.state;
    console.log("Nav props", typeof this.props.welcomeName);
    console.log("isLoggedOut",isLoggedOut);

    if (typeof this.props.welcomeName !== "undefined" || !isLoggedOut) {
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
                Pantry Raid
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/">Welcome, <strong>{this.props.welcomeName}</strong></a></li>
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
              <a href="/" className="navbar-brand">
                Pantry Raid
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/login/">Login</a></li>
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
