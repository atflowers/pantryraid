import React from 'react';
import Nav from "../../components/Nav";
import SignupForm from '../../components/SignupForm';

class SignupPage extends React.Component {
  componentDidMount() {
    // console.log(userSignupRequest);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;