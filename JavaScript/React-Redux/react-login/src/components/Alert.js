import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  return (
    <div
      className={`login-form__alert ${
        alert && alert.message ? 'login-form__alert--active' : ''
      }`}
    >
      {alert && (
        <div
          className={`alert ${alert && alert.type ? alert.type : ''}`}
          role="alert"
        >
          {alert.message}
        </div>
      )}
    </div>
  );
};

Alert.defaultProps = {
  alert: {
    type: '',
    message: '',
  },
};
Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }),
};

export default Alert;
