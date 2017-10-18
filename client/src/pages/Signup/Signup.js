import React from 'react';
import Nav from "../../components/Nav";
import SignupForm from '../../components/SignupForm';
import formback from "../../images/formback.jpg";

require("./signup.css");

class SignupPage extends React.Component {
  componentDidMount() {
    // console.log(userSignupRequest);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="formbackCont">
          <img className="formbackImg" alt="backgroundImg" src={formback}/>
        </div>
        <div className="row" id="rowId">
          <div className="col-sm-4 col-sm-offset-4">
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;