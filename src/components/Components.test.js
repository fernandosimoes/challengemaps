// Link.react.test.js
import React from 'react';
import Header from './Header';
import { MapContainer } from './Map';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

jest.useFakeTimers();

test('Link Header Render', () => {
    
    let component = renderer.create(
        <Header />,
    );

    let tree = component.toJSON();
    // console.log('tree', tree);
    // expect(tree).toMatchSnapshot();
});


test('Map component', () => {
    let component = renderer.create(
        <MapContainer />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});