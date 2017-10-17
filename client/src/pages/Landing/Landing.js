import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";

import store from "../../images/store.jpg";
import kitchen from "../../images/kitchen.jpg";
import berries from "../../images/berries.jpg";
import asparagus from "../../images/asparagus.jpg";
import oranges from "../../images/oranges.jpg";

// import styles from "./landing.css";
require("./landing.css");

class Landing extends Component {
  state = {};

  componentDidMount() {
    // console.log("Landing page mounted.");
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
      <div>
        <Nav />
        <Container fluid>

          <Row>
            <Col size="md-8">
              <div>
                <img className="landingBanner" alt="landingBanner" src={store}/>
              </div>
            </Col>
            <Col size="md-4">
              <div className="bannerText">
                <h1 className="discrHeader">Track expiration dates</h1>
                <div className="discrText">
                  <p>Tired of throwing out unused groceries because you missed the expiration date? Stop the madness with Pantry Raid!</p> 
                  <p>Keep track of your grocery expiration dates and the contents of your fridge and pantry with this handy app app. Tick through your grocery list 
                      as you shop and Pantry Raid will automatically add the item and its expiration date to your inventory list. </p>
                </div>
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
                <h1 className="discrHeader">Save money and time</h1>
                <div className="discrText">
                  <p>Pantry Raid will save you money by helping you avoid dreaded food spoilage. But that's not the only benefit. </p> 
                  <p>Pantry Raid will also stop you from rebuying groceries you already have at home, but don't remember having on hand when at the store. You'll also be free from digging through the 
                      fridge or pantry for that recipe item you think you might have, but just aren't sure if its been eaten or tossed out. </p>
                </div>
                {/* change button to open modal? */}
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
      </div>
    );
  }
}

export default Landing;