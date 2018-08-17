// Link.react.test.js
import React from 'react';
import { FiltersComponent } from '../src/js/components/Filters';
import renderer from 'react-test-renderer';
import {allstores} from './fakedata'

test('Filters', () => {

    let component = renderer.create(
        <FiltersComponent pagesonmap={false} lojas={allstores.stores} />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
