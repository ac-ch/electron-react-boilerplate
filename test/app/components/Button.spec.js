import React from 'react';
import Lab from 'lab';
import { expect } from 'code';
import { shallow } from 'enzyme';

import Button from '../../../app/components/Button';

const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const wrapper = shallow(<Button />);

experiment('<Button />', () => {
  test('renders as a <button> element', done => {
    expect(wrapper.type()).to.equal('button');
    done();
  });
});
