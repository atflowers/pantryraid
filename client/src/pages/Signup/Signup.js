import React from 'react';
import SignupForm from '../../components/SignupForm';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class SignupPage extends React.Component {
  componentDidMount() {
    // console.log(userSignupRequest);
  }

  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
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