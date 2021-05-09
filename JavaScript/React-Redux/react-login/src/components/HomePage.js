import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import { en } from '../translation/index';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  onLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2 align="center">{en.homepage.message}</h2>
        <p align="center">
          <Link to="/logout" onClick={this.onLogout} className="btn btn-link">
            {en.homepage.label}
          </Link>
        </p>
      </div>
    );
  }
}

HomePage.defaultProps = {
  username: '',
};
HomePage.propTypes = {
  username: PropTypes.string,
};
const mapStateToProps = (state) => ({
  username: state.username,
});
const mapDispatchToProps = {
  logout: userActions.logout,
};

const connectedHomePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
export { HomePage as TestHomePage };
export { connectedHomePage as HomePage };
