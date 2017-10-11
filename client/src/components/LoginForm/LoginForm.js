import React, { Component } from "react";
import { Input } from "../Form";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {errors, username, password, isLoading} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <Input
          field="username"
          label="Username / Email"
          name = "username"
          value={username}
          error={errors.username}
          onChange={this.onChange}
          placeholder="Username"
        />

        <Input
          field="password"
          label="Password"
          name = "password"
          value={password}
          error={errors.password}
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