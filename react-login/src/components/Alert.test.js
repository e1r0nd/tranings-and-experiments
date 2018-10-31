import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Alert from './Alert';

configure({ adapter: new Adapter() });

describe('Test HomePage component', () => {
  it('Alert message should be rendered', () => {
    const alert = {
      type: 'success',
      message: 'Random Success Message',
    };
    const wrapper = shallow(<Alert alert={alert} />);

    expect(wrapper.text()).to.equal('Random Success Message');
  });
});
