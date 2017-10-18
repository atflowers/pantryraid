import React, { Component } from "react";
import Nav from "../../components/Nav";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { LoginForm } from "../../components/LoginForm";
import formback from "../../images/formback.jpg";

require("./login.css");

class Login extends Component {
  componentDidMount() {
    console.log("Login mounted, we're good to go!");
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="formbackCont">
          <img className="formbackImg" alt="backgroundImg" src={formback}/>
        </div>
        <Container fluid>
          <Row>
            <Col size="sm-4 sm-offset-4">
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
