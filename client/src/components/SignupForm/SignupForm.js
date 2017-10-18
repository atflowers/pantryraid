import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
// import { PropTypes } from 'prop-types';
// import timezones from '../../data/timezones';
// import map from 'lodash/map';
// import classnames from 'classnames';
import validateInput from '../../validations/signup';
import TextFieldGroup from '../Form/TextFieldGroup';
import signUp from '../../utils/signupActions';
// import flashM from '../../utils/flashMessages';

require("./signUpForm.css");

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      // timezone: '',
      errors: {},
      isLoading: false,
      isLoggedIn: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log("Changing '",e.target.name,"' to: ", e.target.value);
    if (e.target.name === "username" && e.target.name === "") {
      // Check if username exists in the database
      // this.checkUserExists(e);
    }
    if (e.target.name === "email" && e.target.name === "") {
      // Check if email exists in the database
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      // this.props.isUserExists(val).then(res => {
      signUp.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });

      axios({
        method: 'post',
        url: '/api/signup',
        data: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
          // timezone: this.state.timezone
        }
      }).then(response => {
          // store the token in local storage so we can include it later!
          localStorage.setItem('token', response.data.token);
          // console.log("SignupForm userID", response.data);
          localStorage.setItem('userID', response.data.data._id);
          localStorage.setItem('userName', response.data.data.username);
          // console.log(response);
      }).then(()=>{
          const token = localStorage.getItem('token');
          // console.log(token);
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
                  // console.log(response.data);
                  // return (<Redirect to={{pathname: '/offshoot'}}/>);
                  // console.log(this.state);
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
  }

  render() {
    const { errors, isLoggedIn } = this.state;
    // const options = map(timezones, (val, key) =>
    //   <option key={val} value={val}>{key}</option>
    // );

    if (isLoggedIn) {
      return (
        <Redirect to={'/user/' + localStorage.getItem('userID')} />
      )
    }

    return (
      <form className="signUpForm" onSubmit={this.onSubmit}>

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Confirm Password"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

        {/* <div className={classnames("form-group", { 'has-error': errors.timezone })}>
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}
          >
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div> */}

        <div className="form-group">
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

// SignupForm.propTypes = {
//   userSignupRequest: PropTypes.func.isRequired,
//   addFlashMessage: PropTypes.func.isRequired,
//   isUserExists: PropTypes.func.isRequired
// }

// SignupForm.contextTypes = {
//   router: PropTypes.object.isRequired
// }

export default SignupForm;