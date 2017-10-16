import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import userData from "../../utils/userData";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, /* TextArea,  */FormBtn } from "../../components/Form";
import background from "../../images/background.jpg";
import styles from "./User.css";

class Food extends Component {
  state = {
    food: [],
    item: "",
    category: "",
    quantity: "",
    units: "",
    expires: ""
  };

  componentDidMount() {
    // console.log(this);
    this.loadFood();
  }

  loadFood = () => {
    userData.getAllFood()
      .then(res =>
        this.setState({ food: res.data, item: "", category: "", quantity: "", units: "", expires: "" })
      )
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
    if (this.state.item && this.state.quantity && this.state.units) {
      userData.saveFood({
        item: this.state.item,
        category: this.state.category,
        quantity: this.state.quantity,
        units: this.state.units,
        expires: this.state.expires
      })
        .then(res => this.loadFood())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <div className="backgroundCont">
          <img className="backgroundImg" alt="backgroundImg" src={background}/>
        </div>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Food</h1>
            </Jumbotron>
            <form className="foodCont">
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Food Item (Required)"
              />
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Food category (Optional)"
              />
              <Input
                value={this.state.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="Quantity (Required)"
              />
              <Input
                value={this.state.units}
                onChange={this.handleInputChange}
                name="units"
                placeholder="Unit of Measurement (Required)"
              />
              <Input
                value={this.state.expires}
                onChange={this.handleInputChange}
                name="expires"
                placeholder="Expires (Optional)"
              />
              <FormBtn
                disabled={!(this.state.item && this.state.quantity && this.state.units)}
                onClick={this.handleFormSubmit}
              >
                Submit Food
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>In Pantry</h1>
            </Jumbotron>
            <div className="listCont">
              {this.state.food.length ? (
                <List>
                  {this.state.food.map(food => (
                    <ListItem key={food._id}>
                      <Link to={"/food/" + food._id}>
                        <strong>
                          {food.item} in the amount of {food.quantity} {food.units}, expires on {food.expires}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteFood(food._id)} />
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

export default Food;
