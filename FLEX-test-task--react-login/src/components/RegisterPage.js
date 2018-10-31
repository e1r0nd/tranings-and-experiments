import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, alertActions } from '../actions';
import { en } from '../translation';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

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

  onRegister = (event) => {
    event.preventDefault();
    this.props.clear();
    this.setState({ submitted: true });
    const { username, password } = this.state;

    if (username.trim() && password.trim()) {
      console.log(this.state);
      this.props.register(username, password);
    }
  };

  render() {
    const { username, password, submitted } = this.state;
    const { processing } = this.props;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>{en.register}</h1>
        <form name="form">
          <div
            className={
              'form-group' + (submitted && !username ? ' has-error' : '')
            }
          >
            <label htmlFor="username">{en.username.label}</label>
            <input
              type="text"
              className="form-control username"
              name="username"
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
              name="password"
              onChange={this.handleChange}
              placeholder={en.username.placeholder}
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
              onClick={this.onRegister}
            >
              {en.register}
              <span className="login-form__icon-block">
                <span className="login-form__icon glyphicon glyphicon-refresh glyphicon-refresh-animate" />
              </span>
            </button>
            <Link to="/login" className="btn btn-link">
              {en.cancel}
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

RegisterPage.defaultProps = {
  username: '',
  password: '',
  submitted: false,
  register: () => {},
};
RegisterPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  submitted: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  submitted: state.submitted,
  processing: state.registration.registering,
  alert: state.alert,
});
const mapDispatchToProps = {
  register: userActions.register,
  error: alertActions.error,
  clear: alertActions.clear,
};

const connectedRegisterPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage);
export { RegisterPage as TestRegisterPage };
export { connectedRegisterPage as RegisterPage };
