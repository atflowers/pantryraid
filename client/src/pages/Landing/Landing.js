import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";

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
          <div className="offSetRow"></div>
        </Row>
        <Row>
          <Col size="md-8">
            <div>
              <img className="landingBanner" alt="landingBanner" src={store}/>
            </div>
          </Col>
          <Col size="md-4">
            <div className="bannerText">
              <h1>something</h1>
              <p className="discrText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              {/* change button to open modal */}
            </div>
              <form className="btnCont" action={"/Signup/"}>
                <input className="signUpBtn" type="submit" value="Sign Up" />
              </form>
          </Col>
        </Row>
        <Row>
          <div className="dropShadow">
          <Col size="md-4">
            <div className="bannerText">
              <h1>something</h1>
              <p className="discrText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              {/* change button to open modal */}
              <form className="btnCont" action={"/Signup/"}>
                <input className="signUpBtn" type="submit" value="Sign Up" />
              </form>
            </div>
          </Col>
          <Col size="md-8">
            <div>
              <img className="landingBanner" alt="landingBanner" src={kitchen}/>
            </div>
          </Col>
          </div>
        </Row>

        <Row>
          <div className="bottomCont">
            <Col size="md-4">
              <div className="margin">
                <img className="circleImage" alt="circleImage Berries" src={berries}/>
                <div className="miniText">
                  <p>Create Grocery Lists</p>
                </div>
              </div>
            </Col>
            <Col size="md-4">
              <div className="margin">
                <img className="circleImage" alt="circleImage Asparagus" src={asparagus}/>
                <div className="miniText">
                  <p>Manage Your Pantry</p>
                </div>
              </div>
            </Col>
            <Col size="md-4">
              <div className="margin">
                <img className="circleImage" alt="circleImage Oranges" src={oranges}/>
                <div className="miniText">
                  <p>Track Expiration Dates</p>
                </div>
              </div>
            </Col>
          </div>
        </Row>

        <Row>
          <Col size="md-12">
            <div className="footerCont">
              <p>footer af</p>
            </div>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Landing;