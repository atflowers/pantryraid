import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import userData from "../../utils/userData";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, /* TextArea,  */FormBtn } from "../../components/Form";
import background from "../../images/background.jpg";
// import styles from "./User.css";
require("./User.css");

class User extends Component {
  state = {
    // user: [],
    username: "",
    email: "",
    password: "",
    timezone: "",
    inventory: {
      item: "",
      category: "",
      quantity: "",
      units: "",
      expires: ""
    }
  };
  
  componentDidMount() {
    // console.log(this);
    this.loadFood();
  }

  loadFood = () => {
    userData.getAllFood()
      .then(res => {
        // console.log(res.data);
      //   this.setState ( res => {

      //   })
      //   // res.data.map( USA => {
      //   //   // console.log("USA object: ", USA);
      //   //   // console.log("this.state = ", this.state);
      //   //   return this.setState([USA]);
      //   // })

        this.setState(res.data)
        // this.setState({ food: res.data, item: "", category: "", quantity: "", units: "", expires: "" })
        // this.setState({
        // user: res.data,
        // username: res.data[0].username,
        // email: "",
        // password: "",
        // timezone: "",
        // inventory: {
        //   item: "",
        //   category: "",
        //   quantity: "",
        //   units: "",
        //   expires: ""
        // }})
      })
      .catch(err => console.log(err));
  };

  deleteFood = id => {
    userData.deleteFood(id)
      .then(res => this.loadFood())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.inventory.item && this.state.inventory.quantity && this.state.inventory.units) {
      userData.saveFood({
        item: this.state.inventory.item,
        category: this.state.inventory.category,
        quantity: this.state.inventory.quantity,
        units: this.state.inventory.units,
        expires: this.state.inventory.expires
      })
        .then(res => this.loadFood())
        .catch(err => console.log(err));
    }
  };

  consoleLog = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    // console.log(this.state);

    return (
      <Container fluid>
        <div className="backgroundCont">
          <img className="backgroundImg" alt="backgroundImg" src={background}/>
        </div>
        <Row>
          <Col size="sm-6">
            <Jumbotron>
              <h1>Add Food</h1>
            </Jumbotron>
            <form className="foodCont">
              <Input
                value={this.state.inventory.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Food Item (Required)"
              />
              <Input
                value={this.state.inventory.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Food category (Optional)"
              />
              <Input
                value={this.state.inventory.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="Quantity (Required)"
              />
              <Input
                value={this.state.inventory.units}
                onChange={this.handleInputChange}
                name="units"
                placeholder="Unit of Measurement (Required)"
              />
              <Input
                value={this.state.inventory.expires}
                onChange={this.handleInputChange}
                name="expires"
                placeholder="Expires (Optional)"
              />
              <FormBtn
                disabled={!(this.state.inventory.item && this.state.inventory.quantity && this.state.inventory.units)}
                onClick={this.handleFormSubmit}
              >
                Submit Food
              </FormBtn>
            </form>
            <button onClick={this.consoleLog}>CONSOLE Log</button>
          </Col>
          <Col size="sm-6">
            <Jumbotron>
              <h1>In Pantry</h1>
            </Jumbotron>
            <div className="listCont">
              {this.state.inventory.length ? (
                <List>
                  {this.state.inventory.map(food => (
                    <ListItem key={food.item}>
                      <Link to={"/food/" + food.item}>
                        <strong>
                          {food.item} in the amount of {food.quantity} {food.units}, expires on {food.expires}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteFood(food.item)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
