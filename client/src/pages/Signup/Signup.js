import React from 'react';
import SignupForm from '../../components/SignupForm';

class SignupPage extends React.Component {
  componentDidMount() {
    // console.log(userSignupRequest);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default SignupPage;