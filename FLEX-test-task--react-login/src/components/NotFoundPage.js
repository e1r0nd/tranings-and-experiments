import React from 'react';
import { en } from '../translation';

const NotFoundPage = ({ history }) => {
  return (
    <div className="login-form col-md-6 col-md-offset-3 u--center">
      <h1>{en.pageNotFound.title}</h1>
      <button onClick={() => history.goBack()} className="btn btn-primary">
        {en.pageNotFound.goBack}
      </button>
    </div>
  );
};

export default NotFoundPage;
