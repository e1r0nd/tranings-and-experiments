import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';
import { en } from '../translation';

configure({ adapter: new Adapter() });

describe('Test HomePage component', () => {
  it('NotFoundPage should be rendered', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper.find('h1').text()).to.equal(en.pageNotFound.title);
    expect(wrapper.find('button')).to.have.length(1);
  });
});
