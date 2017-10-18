import React from "react";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () =>
  <div>
    <Nav />
    <Container fluid>
      <Row>
        <Col size="sm-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>;
  </div>

export default NoMatch;
