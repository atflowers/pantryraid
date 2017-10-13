import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form";
import store from "../../images/store.jpg";
import kitchen from "../../images/kitchen.jpg";
import berries from "../../images/berries.jpg";
import asparagus from "../../images/asparagus.jpg";
import oranges from "../../images/oranges.jpg";
import styles from "./landing.css";

class Landing extends Component {
  state = {};

  componentDidMount() {
    console.log("Landing page mounted.");
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("The form button was pressed.");
  };

  render() {
    return (
      <Container fluid>

        {/* <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Welcome to the Landing Page!</h1>
            </Jumbotron>
            <form>
              <FormBtn onClick={this.handleFormSubmit}>
                Submit Button
              </FormBtn>
            </form>
            <Link to={"/Food/"}>
              Return to Food page
            </Link>
          </Col>
        </Row> */}

        <Row>
          <Col size="md-8">
            <div>
              <img className="landingBanner" src={store}/>
            </div>
          </Col>
          <Col size="md-4">
            <div className="bannerText">
              <h1>something</h1>
              <p>some more things and details</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <div className="bannerText">
              <h1>something</h1>
              <p>some more things and details</p>
            </div>
          </Col>
          <Col size="md-8">
            <div>
              <img className="landingBanner" src={kitchen}/>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-4">
            <div className="margin">
              <img className="circleImage" src={berries}/>
              <div className="miniText">
                <p>words</p>
              </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="margin">
              <img className="circleImage" src={asparagus}/>
              <div className="miniText">
                <p>words</p>
              </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="margin">
              <img className="circleImage" src={oranges}/>
              <div className="miniText">
                <p>words</p>
              </div>
            </div>
          </Col>
        </Row>



      </Container>
    );
  }
}

export default Landing;
