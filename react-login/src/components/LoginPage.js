import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, alertActions } from '../actions';
import { en } from '../translation/index';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.state = {
      username: '',
      password: '',
      submitted: false,
      processing: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ submitted: false });
    this.setState({ [name]: value });
    if (this.props.alert && this.props.alert.message) {
      this.props.clear();
    }
  };

  onLogin = (event) => {
    event.preventDefault();
    this.props.clear();
    this.setState({ submitted: true });
    const { username, password } = this.state;

    if (username.trim() && password.trim()) {
      this.props.login(username, password);
    }
  };

  render() {
    const { username, password, submitted } = this.state;
    const { processing } = this.props;

    return (
      <div className="login-form col-md-6 col-md-offset-3">
        <h1>{en.login}</h1>
        <form name="form" action="#">
          <div
            className={
              'form-group' + (submitted && !username ? ' has-error' : '')
            }
          >
            <label htmlFor="username">{en.username.label}</label>
            <input
              type="text"
              className="form-control username"
              id="username"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder={en.username.placeholder}
            />

            <div
              className={`login-form__helper help-block ${submitted &&
                !username &&
                ' login-form__helper--has-error'}`}
            >
              {submitted && !username && en.username.error}
            </div>
          </div>
          <div
            className={
              'form-group' + (submitted && !password ? ' has-error' : '')
            }
          >
            <label htmlFor="password">{en.password.label}</label>
            <input
              type="password"
              className="form-control password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder={en.password.placeholder}
            />
            <div
              className={`login-form__helper help-block ${submitted &&
                !password &&
                ' login-form__helper--has-error'}`}
            >
              {submitted && !password && en.password.error}
            </div>
          </div>
          <div className="form-group">
            <button
              className={`login-form__btn btn btn-primary ${
                processing ? 'login-form__btn--animated disabled' : ''
              }`}
              onClick={this.onLogin}
            >
              {en.login}
              <span className="login-form__icon-block">
                <span className="login-form__icon glyphicon glyphicon-refresh glyphicon-refresh-animate" />
              </span>
            </button>
            <Link to="/register" className="btn btn-link">
              {en.register}
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  username: '',
  password: '',
  submitted: false,
  login: () => {},
};
LoginPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  submitted: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  submitted: state.submitted,
  processing: state.authentication.loggingIn,
  alert: state.alert,
});
const mapDispatchToProps = {
  login: userActions.login,
  error: alertActions.error,
  clear: alertActions.clear,
};

const connectedLoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
export { LoginPage as TestLoginPage };
export { connectedLoginPage as LoginPage };
