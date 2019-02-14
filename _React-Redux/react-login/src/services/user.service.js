import { history } from '../helpers';

export const userService = {
  login,
  logout,
  register,
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch('/users/authenticate', requestOptions)
    .then(handleResponse)
    .then((data) => {
      const { username } = data;
      localStorage.setItem('user', JSON.stringify(username));
      return data;
    });
}

function logout() {
  localStorage.removeItem('user');
  history.push('/login');
  // This link should used later to proper redirection and functionality
  // history.push('/logout');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch('/users/register', requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return Promise.resolve(response.json());
}
