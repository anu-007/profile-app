import React, { Component } from 'react';
import LoginForm from './LoginForm';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLoginRequest } from '../actions/loginActions';

class LoginPage extends Component {
  render() {
    const userLoginRequest = this.props;
    return (
    <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <LoginForm userLoginRequest={userLoginRequest} />
        </div>
    </div>
    )
  }
}

LoginPage.propTypes = {
    userLoginRequest: propTypes.func.isRequired
}

export default connect(null, { userLoginRequest })(LoginPage);