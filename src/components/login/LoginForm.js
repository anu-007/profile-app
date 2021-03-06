import React, { Component } from 'react';
import propTypes from 'prop-types';
import { userLoginRequest } from '../../actions/loginActions'; 

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        }
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userLoginRequest(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Enter UserId and Password</h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value = {this.state.username}
                        onChange = {this.onChange}
                        type = "text"
                        name = "username"
                        className = "form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value = {this.state.password}
                        onChange = {this.onChange}
                        type = "password"
                        name = "password"
                        className = "form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        login
                    </button>
                </div>
            </form>
        )
    }
}

LoginForm.propTypes = {
    userLoginRequest: propTypes.func.isRequired
}

export default LoginForm;