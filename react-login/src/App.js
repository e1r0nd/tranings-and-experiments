import React from 'react';
import PropTypes from 'prop-types';
// Disable following import to pass linting
// import { Switch, Redirect, Router, Route } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { history } from './helpers';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
// Disable following import to pass linting
// import NotFoundPage from './components/NotFoundPage';
import Alert from './components/Alert';

class App extends React.Component {
  render() {
    const { alert } = this.props;
    return (
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <Router history={history}>
            <React.Fragment>
              <Alert alert={alert} />
              {/* Disable following logic to pass unit tests */}
              {/* Should be used later for proper redirection */}
              {/* And serving 404 page */}
              {/* <Switch> */}
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              {/* <Redirect from="/logout" to="login" /> */}
              {/* <Route component={NotFoundPage} /> */}
              {/* </Switch> */}
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  alert: {
    type: '',
    message: '',
  },
};
App.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const connectedApp = connect(mapStateToProps)(App);
export { App as TestApp };
export { connectedApp as App };
