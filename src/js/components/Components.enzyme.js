// Link.react.test.js
import React from 'react';
import Header from './Header';
import { MapContainer } from './Map';

import { configure, shallow, mount, render } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Enzyme Map', () => {
    // Render a checkbox with label in the document
    const map = shallow(<MapContainer />);
    // expect(header.hasClass('header')).toBe(true);
    // expect(wrapper.find('.my-button').hasClass('disabled')).to.equal(true);
    // expect(checkbox.text()).toEqual('Off');

    // checkbox.find('input').simulate('change');

    // expect(checkbox.text()).toEqual('On');
});