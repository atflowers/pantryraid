import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Food from "./pages/Food";
import User from "./pages/User";
import Landing from "./pages/Landing";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Protected from "./pages/Protected";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import NewEventPage from './components/events/NewEventPage';
import requireAuth from './utils/requireAuth';

// const wN = 'Bob';

// const App = () =>
export default class App extends React.Component {
  render() {
    // console.log("App props: ", this.props);
    // console.log("User props: ", User);
    return (
      <Router>
        <div>
          {/* <Nav welcomeName={wN} /> */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/food" component={Food} />
            {/* <Route exact path="/user" component={User} /> */}
            <Route exact path="/user/:id" component={User} />
            <Route exact path="/food/:id" component={Detail} />
            {/* <Route exact path="/landing" component={Landing} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/protected" component={Protected} /> */}
            <Route exact path="/new-event" component={requireAuth(NewEventPage)} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
// export default App;
