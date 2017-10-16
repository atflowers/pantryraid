import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { Input } from "../Form";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      isLoggedIn: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Login submit was pressed.");
    axios({
      method: 'post',
      url: '/api/login',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    }).then(response => {
        // store the token in local storage so we can include it later!
        const uID = response.data.data[0]._id;
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userID', uID);
        localStorage.setItem('userName', response.data.data[0].username);
        // console.log("LoginForm response.data.data[0]._id", response.data.data[0]._id);
        
        // const nuID = localStorage.getItem('userID');
        // console.log("nuID",nuID);
        this.setState({userID : response.data.data[0]._id});
    }).then(()=>{
        const token = localStorage.getItem('token');
        console.log("Logged in with TOKEN:",token);
        // we're using this to make a special object so we can
        // set the request
        var instance = axios.create({
            headers: {'Authorization': `Bearer ${token}`}
        });
        // This makes a call to the server with our custom token and then
        // we display log the token to the console. /api/users is a protected
        // route and we can test this in postman to confirm whether or not
        // we need a token!
        // instance.get('/api/users')
        instance.get('/api/login')
            .then( response => {
                // console.log("instance.get - response data: ", response);
                console.log("LogininForm.js - instance.get - response.config.headers.Authorization: ", response.config.headers.Authorization);
                // return (<Redirect to={{pathname: '/offshoot'}}/>);
                console.log("Setting isLoggedIn to true.");
                this.setState({ isLoggedIn: true })
            })
            .catch(err => 
                console.log(err)
            );
        // instance.get('/offshoot').then(response=>console.log(response.data)).catch(err=>console.log(err));
        
    })
    .catch(error=> {
        console.log('Something happened', error)
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {isLoading, isLoggedIn} = this.state;
    console.log("LoginForm.js this.state.userID", this.state.userID);

    if (isLoggedIn) {
      console.log("this.state.userID ", this.state.userID);
      return (
        <Redirect to={'/user/' + this.state.userID} />
      )
    }

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <Input
          label="Username / Email"
          name = "username"
          value={this.state.username}
          onChange={this.onChange}
          placeholder="Username"
        />

        <Input
          label="Password"
          name = "password"
          value={this.state.password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />

      <div className="form-group">
        <button className="btn btn-primary btn-lrg" disabled={isLoading}>
          Login
        </button>
      </div>
      </form>
    )
  }
}

// const LoginForm = () =>
//   <div className="NAMEME">
//     <div className="container-fluid">

//         <button type="button">
//           Log In
//         </button>
//         <a href="/" className="navbar-brand">
//           Sign Up
//         </a>

//     </div>
//   </div>;

// module.exports = LoginForm;

// export default LoginForm;

// export const LoginForm = () => <h1>YESSSSSS</h1>;

/* <Input
label="Password"
name = "password"
value={password}
error={errors.password}
onChange={this.onChange}
type="password"
placeholder="Password"
/> */