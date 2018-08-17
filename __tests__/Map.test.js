import React from 'react';
import { CustomMap } from '../src/js/components/Map';
import renderer from 'react-test-renderer';
import {allstores} from './fakedata';
test('Map component', () => {

    let component = renderer.create(
        <CustomMap pagesonmap={false} lojas={allstores.stores} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
