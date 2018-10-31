import { createAction } from 'redux-actions';
import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';
import { en } from '../translation/index';

export const userActions = {
  login,
  logout,
  register,
};

export const sendLoginData = createAction('Send data on Login');
export const sendRegisterData = createAction('Send data on Register');
export const sendLogoutInfo = createAction('User logged out');

function login(username, password) {
  // return the promise using fetch which adds to localstorage on resolve
  return (dispatch) => {
    dispatch(sendLoginData());
    dispatch(request(username));

    return userService
      .login(username, password)
      .then((user) => {
        dispatch(success(user));
        history.push('/');
      })
      .catch((error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(`Error: ${error}`));
      });
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(username, password) {
  const user = { username, password };
  // return the promise using fetch which dispatches appropriately
  return (dispatch) => {
    dispatch(sendRegisterData());
    dispatch(request(user));
    return userService
      .register(user)
      .then((user) => {
        dispatch(success(user));
        dispatch(alertActions.success(en.alert.registered));
        history.push('/login');
      })
      .catch((error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(`Error: ${error}`));
      });
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
