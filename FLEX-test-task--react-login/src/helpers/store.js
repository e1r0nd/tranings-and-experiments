import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware)),
);
