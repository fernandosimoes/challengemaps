import React from 'react';
import Header from '../src/js/components/Header';
import renderer from 'react-test-renderer';

test('Link Header Render', () => {

    let component = renderer.create(
        <Header />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

