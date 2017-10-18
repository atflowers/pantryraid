import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    food: {}
  };
  // When this component mounts, grab the food with the _id of this.props.match.params.id
  // e.g. localhost:3000/food/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getFood(this.props.match.params.id)
      .then(res => this.setState({ food: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1>
                {this.state.food.item} of type {this.state.food.category}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="sm-10 sm-offset-1">
            <article>
              <h1>Details</h1>
              <p>
                This food is measure in {this.state.food.units}.
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="sm-2">
            <Link to="/">← Back to List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
