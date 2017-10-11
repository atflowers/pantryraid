import React from 'react';
import SignupForm from '../../components/SignupForm';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../utils/signupActions';
import { addFlashMessage } from '../../utils/flashMessages.js';

class SignupPage extends React.Component {
  componentDidMount() {
    // console.log(userSignupRequest);
  }

  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm
            isUserExists={isUserExists}
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage} />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}


export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);