import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { configure } from 'enzyme';
import { Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import { HomePage } from './HomePage';
import { store, history } from '../helpers';

configure({ adapter: new Adapter() });
export const CustomProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
describe('Test HomePage component', () => {
  it('uses Router for logout functionality', () => {
    const wrapper = mount(
      <CustomProvider>
        <Router history={history}>
          <HomePage />
        </Router>
      </CustomProvider>,
    );

    expect(wrapper.find(HomePage)).to.have.length(1);
    expect(wrapper.find(Link)).to.have.length(1);
  });
});
