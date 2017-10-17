import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import arraySort from "array-sort";
import Nav from "../../components/Nav";
import Landing from "../Landing";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import userData from "../../utils/userData";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, /* TextArea,  */FormBtn } from "../../components/Form";
import background from "../../images/background.jpg";
// import styles from "./User.css";
require("date-format-lite");
require("./User.css");

// Nested arrray sort modifier
// function Comparator(a, b) {
//   if (a[3] < b[3]) return -1;
//   if (a[3] > b[3]) return 1;
//   return 0;
// }

class User extends Component {
  // state = {
  //   // user: [],
  //   username: "",
  //   email: "",
  //   password: "",
  //   timezone: "",
  //   inventory: {
  //     item: "",
  //     category: "",
  //     quantity: "",
  //     units: "",
  //     expires: ""
  //   }
  // };
  state = {
    inputItm: "",
    inputCat: "",
    inputQty: "",
    inputUOM: "",
    inputExp: "",
    isLoggedOut: false,
    requestHomePage: false,
    token: "",
    userID: "",
    inventory: []
  };
  
  componentDidMount() {
    // console.log(this);
    // this.loadFood();
    // console.log("params", this.props.match.params.id);
    // this.setState({userID: this.props.match.params.id});
    console.log("WELCOME TO THE USER PAGE");
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    this.setState({token: token});
    this.setState({userID: userID});
    // console.log("User.js userID is",userID);
    // console.log("Logged in with TOKEN:",token);
    // this.loadUser(this.props.match.params.id);
    if (token == null) {
      console.log("The token is NULL");
      this.setState({ isLoggedOut: true });
    }
    this.loadUser(token);
  }

  loadFood = () => {
    userData.getAllFood()
      .then(res => this.setState(res.data))
      .catch(err => console.log(err));
  };

  loadUser = (id) => {
    userData.getUser(id)
      .then(res => {
        // console.log("User.js loadUser data:",res.data.inventory);
        // res.data.inventory.sort(Comparator);
        // console.log(arraySort(res.data.inventory, 'date', {reverse: true}));
        arraySort(res.data.inventory, 'date', {reverse: true});
        res.data.inventory.forEach(function(element) {
          if (element.expires !== null) {
            // console.log(element.expires.date().format("M/D/YY"));
            element.expires = element.expires.date().format("M/D/YY");
          } 
        });
        this.setState(res.data);
      })
      .catch(err => console.log(err));
  };

  deleteFood = foodItem => {
    console.log("Delete foodItem:",foodItem);
    // console.log(this.state.userID);
    // let id = this.state.userID;
    // return;
    // userData.removeFood(this.state.token, {userID: this.state.userID, foodItem: foodItem})
    userData.removeFood(this.state.token, this.state.userID, foodItem)
      .then(res => {
        this.loadUser(this.state.token);
        // console.log("Attempted to delete the record.");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name,":",value);
    this.setState({
      [name]: value
    });
    // this.setState({value: event.target.value});
  };

  // checkExpiration = () => {
  //   console.log("pages/User/User.js - checkExpiration call was made");
  //   userData.checkExpiration(this.state.token, this.state.inputItm)
  //   .then(res => {
  //     if (res.data.length === 0) {
  //       console.log("Didn't find any matching foods in the database.");
  //       return 0;
  //     } else {
  //       console.log("Expires:", res.data[0].life);
  //       return res.data[0].life;
  //     }
  //   })
  //   .catch(err => console.log(err));
  // }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.inputItm && this.state.inputQty && this.state.inputUOM) {
      let inputDate = new Date();
      // Set default for expiration if none entered
      if (this.state.inputExp === "") {
        //Check database for expiration information on the entered food item
        userData.checkExpiration(this.state.token, this.state.inputItm.toLowerCase())
        .then(res => {
          if (res.data.length === 0) {
            console.log("Didn't find any matching foods in the database.");
            inputDate.setDate(inputDate.getDate() + 7); // adds seven days to today's date as a default
            console.log("The new date is ", inputDate);
          } else {
            console.log("Expires:", res.data[0].life);
            inputDate.setDate(inputDate.getDate() + res.data[0].life);
            console.log("The new date is ", inputDate);
          }
        })
        .then( res => {
          userData.saveFood(this.state.token, {
            item: this.state.inputItm,
            category: this.state.inputCat,
            quantity: this.state.inputQty,
            units: this.state.inputUOM,
            expires: inputDate
          })
        })
        .then( res => {
          // console.log("User.js submit form response: ", res.data.inventory);
          this.loadUser(this.state.token);
          // Reset food form
          this.setState({inputItm: "", inputCat: "", inputQty: "", inputUOM: "", inputExp: ""});
        })
        .catch( err => console.log(err));

      } else {
        inputDate = this.state.inputExp.date();
        // console.log("inputDate",inputDate);
        let timeNow = new Date();
        inputDate.add(timeNow.getHours(),"hours");
        inputDate.add(timeNow.getMinutes(),"minutes");
        inputDate.add(timeNow.getSeconds(),"seconds");

        userData.saveFood(this.state.token, {
          item: this.state.inputItm,
          category: this.state.inputCat,
          quantity: this.state.inputQty,
          units: this.state.inputUOM,
          expires: inputDate
        })
        .then(res => {
          // console.log("User.js submit form response: ", res.data.inventory);
          this.loadUser(this.state.token);
          // Reset food form
          this.setState({inputItm: "", inputCat: "", inputQty: "", inputUOM: "", inputExp: ""});
        })
        .catch(err => console.log(err));
      }
    }
  };

  typeToDate = e => {
    e.target.type = "date";
    // console.log(e.target);
  }

  typeToText = e => {
    if (e.target.value.length === 0) {
      e.target.type = "text";
    }
    // console.log("Did I lose focus?");
  }

  consoleLog = e => {
    e.preventDefault();

    this.checkExpiration();
    // let xdate = new Date();
    // xdate.setDate(xdate.getDate() + 7); // adds seven days to today's date
    // console.log("date:", xdate.format("M/D/YY"));
    // console.log("input Expires:", this.state.inputExp);
  };

  render() {
    const {isLoggedOut, requestHomePage, userID} = this.state;
    
    if (isLoggedOut) {
      //If there is not token, the browser is redirected to the home page
      return (
        <Redirect to={'/'} />
      )
    }

    if (requestHomePage) {
      return(
        <div>
          <Nav welcomeName={this.state.username} userID={userID}/>
          <Landing />
        </div>
      );
    } else {
      return (
        <div>
          <Nav welcomeName={this.state.username} userID={userID}/>
          <Container fluid>
            <div className="backgroundCont">
              <img className="backgroundImg" alt="backgroundImg" src={background}/>
            </div>
            <div className="holder"></div>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>ADD FOOD</h1>
                </Jumbotron>
                <form className="foodCont">
                  <Input
                    value={this.state.inputItm}
                    onChange={this.handleInputChange}
                    name="inputItm"
                    placeholder="Food Item (Required)"
                  />
                  <Input
                    value={this.state.inputCat}
                    onChange={this.handleInputChange}
                    name="inputCat"
                    placeholder="Food category (Optional)"
                  />
                  <Input
                    value={this.state.inputQty}
                    onChange={this.handleInputChange}
                    name="inputQty"
                    placeholder="Quantity (Required)"
                  />
                  <Input
                    value={this.state.inputUOM}
                    onChange={this.handleInputChange}
                    name="inputUOM"
                    placeholder="Unit of Measurement (Required)"
                  />
                  <Input
                    onFocus={this.typeToDate}
                    onBlur={this.typeToText}
                    value={this.state.inputExp}
                    onChange={this.handleInputChange}
                    name="inputExp"
                    placeholder="Expires (Optional)"
                  />
                  <FormBtn
                    disabled={!(this.state.inputItm && this.state.inputQty && this.state.inputUOM)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Food
                  </FormBtn>
                </form>
                {/* {<button onClick={this.consoleLog}>CONSOLE {this.state.username}</button>} */}
              </Col>
              <Col size="md-6">
                <Jumbotron>
                  <h1>IN PANTRY</h1>
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
                    <h3 className="noResult">No Results to Display</h3>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default User;
