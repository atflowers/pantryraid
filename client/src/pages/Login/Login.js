import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { LoginForm } from "../../components/LoginForm";

class Login extends Component {
  componentDidMount() {
    console.log("Login mounted, we're good to go!");
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4 md-offset-4">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;