import React from 'react';
import Pagination from './Pagination';
import renderer from 'react-test-renderer';

test('Pagination', () => {

    let component = renderer.create(
        <Pagination changepage={()=>{}} currentPage={0} totalPages={10} />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
