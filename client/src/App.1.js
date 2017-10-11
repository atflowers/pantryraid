import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Food from "./pages/Food";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Food} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/food/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
